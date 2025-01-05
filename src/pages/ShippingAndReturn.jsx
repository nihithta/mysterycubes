import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet';
import '../styles/aboutus.css';
import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title='Shipping and Return Policy'>

      <CommonSection title='Shipping and Return Policy' />

      <section className="pp justify-content-space-between mb-5 mt-5">
        <h4>Shipping:</h4>
        <p>At MysteryCubes, we follow a phase-based shipping model for our mystery boxes. Each phase lasts for the first 3 weeks of every month, during which customers can place their orders. All orders for mystery boxes will be shipped in the 4th week of the respective month. This ensures that all customers receive their surprises together, maintaining the excitement of the mystery.</p>
        <p>For all other products like tees, hoodies, and F1 merch, we aim to process and ship orders within 5-7 business days. Shipping times may vary depending on your location and the shipping method chosen during checkout.</p>
        <p>Shipping costs are calculated based on the destination and weight of the package at checkout. Please ensure the shipping address provided is accurate, as MysteryCubes is not responsible for delays or issues caused by incorrect information.</p>

        <h4>Returns:</h4>
        <p><strong>We have a strict no-return policy on all items.</strong> This includes mystery boxes, tees, hoodies, and F1 merch. Once your order is placed and delivered, it cannot be returned. We encourage customers to review product descriptions, sizes, and specifications carefully before making a purchase.</p>

        <h4>Exchanges:</h4>
        <p>Exchanges are only possible under the following circumstances:</p>
        <ul>
          <li>If you receive a damaged or defective item, such as merch or apparel.</li>
          <li>If the size of a hoodie or tee is incorrect.</li>
        </ul>
        <p>To initiate an exchange, please contact our customer service team within 7 days of receiving your order. Our team will review your request and determine if an exchange is possible. Please note that exchanges are subject to product availability and our team's discretion.</p>
        <p>All exchange shipping costs will be borne by the customer, and we recommend using a trackable shipping method to ensure safe delivery.</p>

        <h4>Damaged or Defective Items:</h4>
        <p>If you receive an item that is damaged or defective, please reach out to our customer service team immediately. Provide your order details and attach clear photos of the item in question. We will either replace the item or offer an exchange, depending on the situation and product availability.</p>

        <h4>Important Notes:</h4>
        <p>Mystery boxes are curated with care and excitement, and we cannot entertain any requests for returns, refunds, or exchanges unless there is a rare issue with shipping damage. By purchasing a mystery box, you agree to the surprise nature of the product.</p>
        <p>If you have any concerns or questions regarding our Shipping and Return Policy, please contact us at mysterycubes.in@gmail.com. We’re here to assist you!</p>

        <p className="pp">Last Updated: 06-01-2025</p>
      </section>
    </Helmet>
  );
};

export default PrivacyPolicy;
