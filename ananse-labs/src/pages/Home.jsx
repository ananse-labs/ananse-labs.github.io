const Home = () => {
  return (
    <div className="main">
      <section
        className="hero-equal-height pt-165 pb-100"
        style={{
          background:
            'url("/src/assets/fonts/bg-shape.svg")no-repeat bottom center / cover',
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-6">
              <div className="hero-slider-content text-white">
                <span className="text-uppercase">Ananse Labs</span>
                <h1 className="text-white">
                  Data Analytics &amp; AI Solutions
                </h1>
                <p className="lead">
                  We specialize in delivering innovative data analytics and
                  machine learning solutions for businesses.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="img-wrap">
                <img
                  src="/src/assets/fonts/hero-single-img-3.svg"
                  alt="hero single"
                  className="custom-width img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="promo-block ptb-100">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6 col-lg-6 box-1">
              <div className="single-promo-block animated-hover p-5 text-center">
                <div className="promo-block-icon mb-3">
                  <span className="fab fa-superpowers icon-md color-primary" />
                </div>
                <div className="promo-block-content">
                  <h5>Data Analytics &amp; AI</h5>
                  <p>
                    At the forefront of AI innovation, we expertly transform
                    adaptable growth strategies, ensuring the seamless
                    integration of cutting-edge AI technologies into core
                    business competencies..
                  </p>
                  <a href="/services" className="btn accent-solid-btn mt-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 box-2">
              <div className="single-promo-block animated-hover p-5 text-center">
                <div className="promo-block-icon mb-3">
                  <span className="fa fa-tasks icon-md color-primary" />
                </div>
                <div className="promo-block-content">
                  <h5>Creative Solutions</h5>
                  <p>
                    We provide innovative solutions meticulously crafted and
                    tailored to meet the specific needs of your business. Each
                    solution is tailored to a specific business need.
                  </p>
                  <a href="/aboutus" className="btn secondary-solid-btn mt-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us-section gray-light-bg ptb-100">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-12 col-lg-6">
              <div className="about-img-wrap">
                <img
                  src="/src/assets/images/about-us-alt.jpg"
                  alt="video"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-5">
              <div className="about-content-right mb-md-4 mb-lg-0">
                <h2>About Us</h2>
                <p>
                  We are an AI-driven data analytics and machine learning
                  insights company on a mission to transform the way businesses
                  operate in today's data-centric world. Our journey begins and
                  ends with a goal to revolutionize decision-making processes
                  and empower businesses of all sizes with the remarkable
                  capabilities of AI and data analysis.
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
                        At the heart of our company's mission is a dedication to
                        leveraging advanced data analytics and machine learning
                        insights to empower businesses in an increasingly
                        data-driven era. We are driven by a commitment to
                        innovation, constantly pushing the boundaries of AI
                        technology to redefine industry standards.{" "}
                      </p>
                      <p>
                        Our goal is to equip businesses with the knowledge and
                        tools needed to make informed, data-backed decisions
                        that drive growth and sustainability. We believe in the
                        transformative power of data and are dedicated to
                        ensuring that every piece of information becomes a
                        strategic asset for our clients. Ultimately, our mission
                        is to empower businesses of all sizes to thrive in the
                        ever-evolving business landscape by unlocking the full
                        potential of their data resources.
                      </p>
                    </div>
                    <div className="tab-pane" id="feature-tab-2">
                      <p>
                        At our core, we are dedicated to propelling your
                        business forward through advanced data-driven
                        strategies. We try to revolutionize Business
                        Intelligence and Big Data Analytics. We don't just meet
                        your needs; we exceed your expectations. Our vision
                        looks to cover these 4 principles:
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
      <section className="feature-content-two ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <h2> Our Services</h2>
                <p className="lead">
                  Our services are each designed to provide you with the best
                  possible value.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="feature-feature-list p-4 text-center">
                <img
                  src="/src/assets/fonts/data-analytics.svg"
                  alt="consulting"
                  width={80}
                  className="mb-3"
                />
                <h5 className="mb-2">Big Data Analytics</h5>
                <p>
                  Experience the power of informed decision-making with our Big
                  Data consulting services.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-feature-list p-4 text-center">
                <img
                  src="/src/assets/fonts/artificial-intelligence.svg"
                  alt="consulting"
                  width={80}
                  className="mb-3"
                />
                <h5 className="mb-2">Machine Learning &amp; AI</h5>
                <p>
                  We offer cutting-edge machine learning and AI techniques
                  tailored to meet your specific business requirements.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-feature-list p-4 text-center">
                <img
                  src="/src/assets/fonts/machine-learning.svg"
                  alt="consulting"
                  width={80}
                  className="mb-3"
                />
                <h5 className="mb-2">Software Development</h5>
                <p>
                  We deliver high-quality, scalable, and user-friendly software
                  that helps you stay competitive in the digital landscape.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="call-to-action ptb-100"
        style={{
          background:
            'url("/src/assets/fonts/cta-bg.svg")no-repeat center center / cover',
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
                  Our clients spans diverse industries and countries, reflecting
                  our commitment to providing tailored solutions for businesses
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
      <section className="call-to-action py-5">
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="col-md-7">
              <div className="subscribe-content">
                <h3 className="mb-1">Ready to transform your business?</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="action-btn text-lg-right text-sm-left">
                <a href="/contactus" className="btn secondary-solid-btn">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
