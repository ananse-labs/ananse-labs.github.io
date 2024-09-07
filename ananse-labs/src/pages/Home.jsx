const Home = () => {
  return (
    <div className="main">
      {/*hero section start*/}
      <section
        className="hero-equal-height pt-165 pb-100"
        style={{
          background: 'url("fonts/bg-shape.svg")no-repeat bottom center / cover'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="hero-slider-content text-white">
                <span className="text-uppercase">Ananse Labs</span>
                <h1 className="text-white">Anomaly Detection SaaS Solutions</h1>
                <p className="lead">
                  We deliver cutting-edge AI powered fault detection, maintainance
                  and fraud detection software as a service.{" "}
                </p>
                {/* <div class="action-btns mt-3">
                      <a href="#promo-block" class="btn secondary-solid-btn">Get Started Now</a>
                  </div> */}
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="img-wrap">
                <img
                  src="fonts/hero-single-img-3.svg"
                  alt="hero single"
                  className="custom-width img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*hero section end*/}
      {/*promo section start*/}
      <section className="promo-block ptb-100">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6 col-lg-6 box-1">
              <div className="single-promo-block animated-hover p-5 text-center">
                <div className="promo-block-icon mb-3">
                  <span className="fa fa-cog fa-spin fa-3x fa-fw icon-md color-primary" />
                </div>
                <div className="promo-block-content">
                  <h5>Fault Detection System</h5>
                  <p>
                    Detect potential machine failures at an early stage, prevent
                    costly breakdowns &amp; reduce maintainance expenses with our
                    advanced AI-driven solutions.{" "}
                  </p>
                  <a href="services.html" className="btn accent-solid-btn mt-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 box-2">
              <div className="single-promo-block animated-hover p-5 text-center">
                <div className="promo-block-icon mb-3">
                  <span className="fa fa-credit-card fa-spin fa-3x fa-fw icon-md color-primary" />
                </div>
                <div className="promo-block-content">
                  <h5>Fraud Detection System</h5>
                  <p>
                    Identify and stop fraudulent activities in real-time with our
                    powerful fraud detection systems, designed to protect your
                    business from financial threats and ensure seamless, secure
                    operations.{" "}
                  </p>
                  <a href="about-us.html" className="btn secondary-solid-btn mt-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*promo section end*/}
      {/*about us section start*/}
      <section className="about-us-section gray-light-bg ptb-100">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-12 col-lg-6">
              <div className="about-img-wrap">
                <img
                  src="images/about-us-alt.jpg"
                  alt="video"
                  className="img-fluid rounded shadow-sm"
                />
                {/* <div class="card-img-overlay text-center">
                      <a href="https://www.youtube.com/watch?v=9No-FiEInLA" class="popup-youtube video-play-icon color-bip shadow"><span class="ti-control-play"></span> </a>
                  </div> */}
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="about-content-right mb-md-4 mb-lg-0">
                <h2>About Us</h2>
                <p>
                  We are a leading AI-driven company specializing in data analytics
                  and machine learning insights. Our mission is to transform the way
                  businesses operate in today's data-centric world by providing
                  innovative solutions. From fault detection and prediction systems
                  that prevent costly machine breakdowns to fraud detection systems
                  that protect businesses from financial threats, we empower
                  companies of all sizes to make smarter decisions, optimize
                  performance, and drive growth through the power of AI and data
                  analysis.
                </p>
                <div className="feature-tabs-wrap">
                  <ul
                    className="nav nav-tabs mb-3 border-bottom-0 feature-tabs"
                    data-tabs="tabs"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center"
                        href="#feature-tab-2"
                        data-toggle="tab"
                      >
                        <h6 className="mb-0">Our Mission</h6>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center"
                        href="#feature-tab-3"
                        data-toggle="tab"
                      >
                        <h6 className="mb-0">Our Vision</h6>
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content feature-tab-content">
                    <div className="tab-pane active" id="feature-tab-1">
                      <p>
                        At the core of our mission is a relentless commitment to
                        harnessing advanced data analytics and machine learning to
                        empower businesses in today's data-driven landscape. We are
                        fueled by a passion for innovation, continually pushing the
                        boundaries of AI to set new industry standards. Our mission
                        is to equip businesses with powerful insights and
                        cutting-edge tools that transform data into actionable
                        strategies, driving growth, efficiency, and long-term
                        sustainability. We believe in the transformative potential
                        of data and are dedicated to turning every piece of
                        information into a valuable asset for our clients.
                        Ultimately, we strive to enable businesses of all sizes to
                        thrive by unlocking the full power of their data.
                      </p>
                    </div>
                    <div className="tab-pane" id="feature-tab-2">
                      <p>
                        At our core, we are committed to driving your business
                        forward through cutting-edge, data-driven strategies. We
                        strive to revolutionize business intelligence and big data
                        analytics, not just meeting your needs but exceeding your
                        expectations at every turn. Our vision is built on four key
                        principles:
                      </p>
                      <ul className="list-unstyled tech-feature-list mb-4">
                        <li className="py-1">
                          <span className="ti-control-forward mr-2 color-secondary" />
                          <strong>Innovation Pioneers</strong>
                        </li>
                        <li className="py-1">
                          <span className="ti-control-forward mr-2 color-secondary" />
                          <strong>Empowering Businesses</strong>
                        </li>
                        <li className="py-1">
                          <span className="ti-control-forward mr-2 color-secondary" />
                          <strong>Global Impact</strong>
                        </li>
                        <li className="py-1">
                          <span className="ti-control-forward mr-2 color-secondary" />
                          <strong>Data-Driven Transformation</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*about us section end*/}
      {/*feature section start*/}
      {/*feature section end*/}
      {/*counter section start*/}
      <section
        className="call-to-action ptb-100"
        style={{
          background: 'url("fonts/cta-bg.svg")no-repeat center center / cover'
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-8">
              <div className="call-to-action-content text-white text-center mb-4">
                <h2 className="text-white mb-1">
                  Unlocking Opportunities for Your Business
                </h2>
                <p className="lead">
                  Our clients spans diverse industries and countries, reflecting our
                  commitment to providing tailored solutions for businesses
                  worldwide. With a global outlook and a versatile approach, we
                  strive to reshape your success story with creative solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-2">
              <div className="single-counter rounded p-4 text-center text-white">
                <span className="ti-user icon-md" />
                <h3 className="mb-0 text-white">10</h3>
                <p>Clients</p>
              </div>
            </div>
            <div className="col-md-8 col-lg-2">
              <div className="single-counter rounded p-4 text-center text-white">
                <span className="ti-location-pin icon-md" />
                <h3 className="mb-0 text-white">3</h3>
                <p>Countries</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="single-counter rounded p-4 text-center text-white">
                <span className="ti-briefcase icon-md" />
                <h3 className="mb-0 text-white">5</h3>
                <p>Industries</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Home;
