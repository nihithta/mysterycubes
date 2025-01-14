import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/checkout.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { auth } from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc} from 'firebase/firestore';

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dx3cztk0k/image/upload';
const UPLOAD_PRESET = 'payment_ssupload';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const DELIVERY_FEE = 59;
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid);
      else setUserId(null);
    });
    return () => unsubscribe();
  }, []);

  const taxes = Math.floor(totalAmount * 0.12 - totalAmount * 0.08);
  const finalAmount = totalAmount + DELIVERY_FEE;

  const handleScreenshotUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 1024 * 1024) setPaymentScreenshot(file);
    else toast.error('Image size should be less than 1MB');
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const response = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      return data.secure_url; // URL of the uploaded image
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw new Error('Image upload failed');
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!paymentMethod || phone.length !== 13 || name.length < 3 || !/^\d{6}$/.test(zipCode)) {
      toast.error('Please fill all required fields correctly.');
      return;
    }

    try {
      setLoading(true);

      let screenshotUrl = null;
      if (paymentMethod === 'qr' && paymentScreenshot) {
        screenshotUrl = await uploadToCloudinary(paymentScreenshot);
      }

      const orderData = {
        name,
        email,
        phone,
        address,
        city,
        state,
        zipCode,
        paymentMethod,
        items: cartItems,
        totalAmount: finalAmount,
        orderDate: new Date().toLocaleString(),
        userId,
        orderStatus: 'pending',
        paymentStatus: paymentMethod === 'cod' ? 'pending' : 'screenshot_uploaded',
        paymentScreenshot: screenshotUrl,
        deliveryFee: DELIVERY_FEE,
        taxes,
        subtotal: totalAmount,
        createdAt: new Date(),
      };

      const ordersRef = collection(db, 'users', userId, 'orders');
      const userOrderRef = await addDoc(ordersRef, orderData);

      await setDoc(doc(db, 'orders', userOrderRef.id), {
        ...orderData,
        orderId: userOrderRef.id,
      });

      toast.success('Order placed successfully');
      dispatch(cartActions.clearCart());
      navigate('/orderplaced', { state: { orderId: userOrderRef.id, orderData } });
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Order placement failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <section>
      <Container>
        <Row className='checkout__row'>
          <Col lg="4" className="order__summary">
              <h4>Order Summary</h4>
              <div className="table_total">
                <table width="100%" className="table tableo table-borderd w-100">
                  <thead>
                    <tr>
                      <th className="text-center">Product</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Qty</th>
                      <th className="text-center">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => {
                      const finalprice = item.price * item.quantity;
                      return (
                        <tr key={item.id}>
                          <td className="text-center">
                            {item.title} ({item.size}) 
                            {item.color && (
                              <>
                                <span>(</span>
                                <span 
                                  style={{ 
                                    marginLeft: "5px", 
                                    backgroundColor: item.color, 
                                    width: "10px", 
                                    height: "10px",
                                    borderRadius: "20px", 
                                    display: "inline-block" 
                                  }}
                                ></span>
                                <span> {item.color})</span>
                              </>
                            )}
                          </td>
                          <td className="text-center">Rs.{item.price}</td>
                          <td className="text-center">{item.quantity}</td>
                          <td className="text-center">Rs.{finalprice}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="divvvv">
                <p>Total Amount:</p>
                <p className="ppp"> Rs.{totalAmount}</p>
              </div>
              <div className="divvvv">
                <p>Taxes</p>
                <p className="ppp"> Rs.{taxes}</p>
              </div>
              <div className="divvvv">
                <p>Delivery charges</p>
                <p className="ppp">Rs.{DELIVERY_FEE}</p>
              </div>
              <div className="divvvv">
                <p>Additional discount</p>
                <p className="ppp"> - Rs.{taxes}</p>
              </div>
              <div className="divvvv line_below">
                <h3>Total Amount:</h3>
                <h3 className="ppp"> Rs.{finalAmount}</h3>
              </div>
          </Col>

          <Col lg="8">
            <h4 className="mb-3">Delivery Details</h4>
            <Form className="billing__form" onSubmit={handlePlaceOrder}>
              <FormGroup className="form__group">
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </FormGroup>
              <FormGroup className="form__group">
                <label>Phone</label>
                <PhoneInput
                  defaultCountry="IN"
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  inputStyle={{ width: '100%' }}
                  inputProps={{
                    required: true,
                  }}
                />
              </FormGroup>
              <FormGroup className="form__group">
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </FormGroup>
              <FormGroup className="form__group">
                <label>Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
              </FormGroup>
              <FormGroup className="form__group">
                <label>City</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
              </FormGroup>
              <FormGroup className="form__group">
                <label>State</label>
                <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
              </FormGroup>
              <FormGroup className="form__group">
                <label>Zip Code</label>
                <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
              </FormGroup>

              <h4 className="mb-3">Choose Payment Method</h4>
              <FormGroup>
                <label>
                  <input
                    type="checkbox"
                    checked={paymentMethod === 'qr'}
                    onChange={() => setPaymentMethod('qr')}
                  />
                  Pay via QR Code
                </label>
                {paymentMethod === 'qr' && (
                  <div className="mt-3">
                    <div className="alert alert-info">
                      We understand this payment method may seem unconventional. We are currently awaiting verification from Razorpay, 
                      and online payment integration will be available from next month. We appreciate your patience and understanding.
                    </div>
                    <img 
                      src="/api/placeholder/200/200" 
                      alt="Payment QR Code"
                      className="mb-3"
                    />
                    <div>
                      <label className="d-block mb-2">Upload Payment Screenshot</label>
                      <input type="file" accept="image/*" onChange={handleScreenshotUpload} />
                    </div>
                  </div>
                )}
              </FormGroup>

              <button className="buy__button w-100" disabled={loading}>
                {loading ? 'Placing Order...' : 'Place Order'}
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;