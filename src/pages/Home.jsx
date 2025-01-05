import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import Clock from "../components/UI/Clock";
import useGetData from "../custom-hooks/useGetData";
import timer from "../assets/images/timer.png";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const limit = 10; // Set the number of documents to fetch at once
  const { data: products, loading } = useGetData("products", limit);

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    if (products && products.length > 0) {
      setTrendingAndBestSalesProducts(products);
    }
  }, [products]);

  const setTrendingAndBestSalesProducts = (products) => {
    const filteredTrendingProducts = products.filter(
      (item) => item.Trending === "Yes"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.New === "Yes"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
  };

  const limitProducts = 12;

  const renderTrendingProducts = useMemo(() => {
    return loading ? (
      <h5 className="fw-bold">Loading...</h5>
    ) : (
      <ProductsList data={trendingProducts.slice(0, limitProducts)} />
    );
  }, [loading, trendingProducts]);

  const renderBestSalesProducts = useMemo(() => {
    return loading ? (
      <h5 className="fw-bold">Loading...</h5>
    ) : (
      <ProductsList data={bestSalesProducts.slice(0, limitProducts)} />
    );
  }, [loading, bestSalesProducts]);


  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">For the first time in India!</p>
                <div className="h21">
                  <h2>Buy a Mystery Box</h2>
                </div>
                <div className="h22 mt-0">
                  <h2 className="colchange">and maybe win an iphone?</h2>
                </div>

                <h1 className="tal">
                  Who knows what you might get? Join in on the suspense right now!
                </h1>

                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="buy__button"
                >
                  <Link to="/shop">Shop Now</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src="/logo_final.jpeg" alt="" />
              </div>
            </Col>
          </Row>
        </Container>

        

      </section>
      <Services />
      <section className="colourit">
      <Container >
      <Col lg="12" className="text-center">
              <h2 className="section__title coltex">Shop by Category</h2>
            </Col>
          
          
            <div className="feature-container">
      <Link to={"/boxes"} className="feature-link">
        <div className="fe-box">
          <img src="/box.jpg" alt="" />
          <h6>Mystery Boxes</h6>
        </div>
      </Link>
      <Link to={"/hoodies"} className="feature-link">
        <div className="fe-box">
          <img src="/hoodie.jpg" alt="" />
          <h6>Hoodies</h6>
        </div>
      </Link>
      <Link to={"/tees"} className="feature-link">
        <div className="fe-box">
          <img src="/tee.jpeg" alt="" />
          <h6>Tees</h6>
        </div>
      </Link>
      <Link to={"/f1"} className="feature-link">
        <div className="fe-box">
          <img src="/f1.jpeg" alt="" />
          <h6>F1 Merch</h6>
        </div>
      </Link>
    </div>
          
        </Container>
        </section>
      
      {/*<section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold"><div className="displayflexxing"> 
                
                <div class="card">
              <div class="card__image"></div>
              <div class="card__content">
                <h2 className="card__h2"></h2>
                <p className="card__p"></p>
              </div>
          </div>
          
          <div class="card">
              <div class="card__image"></div>
              <div class="card__content">
                <h2 className="card__h2"></h2>
                <p className="card__p"></p>
              </div>
          </div>
          
          <div class="card">
              <div class="card__image"></div>
              <div class="card__content">
                <h2 className="card__h2"></h2>
                <p className="card__p"></p>
              </div>
          </div>
          
          <div class="card">
              <div class="card__image"></div>
              <div class="card__content">
                <h2 className="card__h2"></h2>
                <p className="card__p"></p>
              </div>
          </div></div></h5>
            ) : (
              <ProductsList data={trendingProducts} />
              
            )}
          </Row>
        </Container>
       
      </section> */}

      <section className="timer__count">
        <Container>
          <Row>
            <div className="timer-div"><Col lg="6" md="12" className="count__down-col">
              <div className="clock_top-content">
                <h3 className="text-black fs-6 mb-2">Limited Offer</h3>
                <h3 className="text-black fs-3 mb-2 per">
                  50% off on all products
                </h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__button store__btn mt-5"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            
            <Col lg="6" md="12" className="text-end counter__img">
              <img src={timer} alt="" />
            </Col></div>
            
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            {loading ? (
              <h5 className="fw-bold">Loading...</h5>
            ) : (
              <ProductsList data={bestSalesProducts} />
            )}
          </Row>
        </Container>
      </section>
      
    </Helmet>
  );
};

export default Home;
