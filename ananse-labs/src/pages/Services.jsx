const Services = () => {
  return (
    <div className="main">
      {/*header section start*/}
      <section
        className="hero-section ptb-100 gradient-overlay"
        style={{
          background:
            'url("/src/assets/images/header-bg-5.jpg")no-repeat center center / cover',
        }}
      >
        <div
          className="hero-bottom-shape-two"
          style={{
            background:
              'url("/src/assets/fonts/hero-bottom-shape.svg")no-repeat bottom center',
          }}
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7">
              <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                <h1 className="text-white mb-0">Our Services</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*header section end*/}
      {/*promo block with hover effect start*/}
      <section className="promo-block ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="contact-us-form rounded p-5">
                <h6>
                  Our services encompass three core areas, offering flexibility
                  across various industries. Our diverse products can be
                  customized to meet your unique requirements, ensuring tailored
                  solutions for your specific needs.
                </h6>
              </div>
              <div className="single-promo-block promo-hover-bg-1 hover-image shadow-lg p-5 rounded">
                <img
                  src="/src/assets/images/sentinel3.jpg"
                  alt="promo"
                  className="mb-3"
                  width={100}
                />
                <div className="promo-block-content">
                  <h5>Sentinel: Fault Detection &amp; Maintenance SaaS</h5>
                  <p>
                    Our advanced Fault Detection and Maintenance SaaS platform
                    offers a seamless, intelligent solution designed to optimize
                    your operations and minimize downtime. Leveraging
                    cutting-edge technology, we deliver real-time monitoring,
                    predictive analytics, and proactive maintenance tailored to
                    your specific business needs. Whether it's identifying
                    issues before they become critical or ensuring the longevity
                    of your assets, our platform empowers you to stay ahead with
                    confidence, efficiency, and peace of mind.
                  </p>
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                      <i className="fas fa-tachometer-alt" />{" "}
                      <strong> &nbsp; Real-Time Monitoring:</strong>{" "}
                      Continuously track system (machines, equipment, vehicles,
                      etc.) performance to detect issues instantly.
                    </li>
                    <li>
                      <i className="fas fa-cogs" />{" "}
                      <strong> &nbsp; Predictive Maintenance:</strong>
                      Anticipate failures before they happen with data-driven
                      insights.
                    </li>
                    <li>
                      <i className="fas fa-bell" />{" "}
                      <strong> &nbsp; Customizable Alerts:</strong>
                      Receive tailored notifications based on your unique
                      operational thresholds.
                    </li>
                    <li>
                      <i className="fas fa-plug" />{" "}
                      <strong> &nbsp; Scalable Integration:</strong>
                      Seamlessly integrate with your existing systems, adaptable
                      to businesses of any size.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="col-md-12 col-lg-12">
              <div className="single-promo-block promo-hover-bg-2 hover-image shadow-lg p-5 rounded">
                <img
                  src="/src/assets/images/sentinel3.jpg"
                  alt="promo"
                  className="mb-3"
                  width={100}
                />
                <div className="promo-block-content">
                  <h5>Vanguard: Transaction Fraud Detection SaaS</h5>
                  <p>
                    Our Transaction Fraud Detection SaaS leverages
                    state-of-the-art algorithms and machine learning to
                    safeguard your business from fraudulent activities in real
                    time. Designed to detect suspicious transactions with
                    precision, our solution empowers you to protect customer
                    data, reduce financial losses, and maintain trust. With
                    customizable fraud filters and seamless integration, we
                    provide robust, scalable security tailored to meet the
                    evolving needs of your business.
                  </p>
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                      <i className="fas fa-shield-alt" />{" "}
                      <strong>&nbsp;Real-Time Fraud Detection:</strong>{" "}
                      Instantly identify and block suspicious transactions
                      before they cause harm.
                    </li>
                    <li>
                      <i className="fas fa-robot" />{" "}
                      <strong>&nbsp;Machine Learning Algorithms:</strong>
                      Continuously improve detection accuracy by learning from
                      new patterns of fraudulent activity.
                    </li>
                    <li>
                      <i className="fas fa-filter" />{" "}
                      <strong>&nbsp;Customizable Fraud Filters:</strong>
                      Tailor detection rules to fit your unique business needs
                      and transaction profiles.
                    </li>
                    <li>
                      <i className="fas fa-plug" />{" "}
                      <strong>&nbsp;Seamless Integration:</strong> Easily
                      integrates with your existing payment and security systems
                      for comprehensive protection.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="col-md-12 col-lg-12">
              <div className="single-promo-block promo-hover-bg-3 hover-image shadow-lg p-5 rounded">
                <img
                  src="/src/assets/fonts/promo-img-3.svg"
                  alt="promo"
                  className="mb-3"
                  width={100}
                />
                <div className="promo-block-content">
                  <h5>Big Data Consulting Services</h5>
                  <p>
                    Unlock the full potential of your data with our Big Data
                    Consulting Services. We leverage modern data stacks and
                    cloud technologies to provide solutions that are not only
                    fast and reliable but also scalable to meet your growing
                    needs. Our expert team helps you turn complex data into
                    actionable insights, ensuring you stay ahead in an
                    increasingly data-driven world. Whether it's optimizing your
                    infrastructure, implementing advanced analytics, or building
                    custom data solutions, we are here to guide your journey to
                    success.
                  </p>
                  <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                      <i className="fas fa-cloud" />{" "}
                      <strong>&nbsp;Cutting-Edge Technologies:</strong>
                      Harness the power of modern data stacks and cloud
                      platforms to maximize efficiency and scalability.
                    </li>
                    <li>
                      <i className="fas fa-lightbulb" />{" "}
                      <strong>&nbsp;&nbsp;Expert Data Strategy:</strong> Benefit
                      from our experienced team’s insights to craft tailored
                      strategies that align with your business goals.
                    </li>
                    <li>
                      <i className="fas fa-chart-line" />{" "}
                      <strong>&nbsp;Advanced Analytics:</strong>
                      Implement sophisticated analytics solutions to unlock
                      valuable insights and drive data-informed decisions.
                    </li>
                    <li>
                      <i className="fas fa-cogs" />{" "}
                      <strong>&nbsp;Custom Solutions:</strong> Get bespoke data
                      solutions designed to address your unique challenges and
                      enhance your operational capabilities.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*promo block with hover effect end*/}
      {/*services section start*/}
      <section className="services-section ptb-100 gray-light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>Our Approach</h2>
                <p className="lead">
                  We are committed to leading the way in transformative
                  solutions. Our expertise spans a range of services, each
                  designed to provide you with unparalleled value.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-single animated-hover text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <img
                  src="/src/assets/fonts/consult.svg"
                  alt="consulting"
                  width={80}
                  className="mb-3"
                />
                <h5>Personalized Solutions</h5>
                <p className="mb-0">
                  We tailor our services to meet the unique needs of each
                  client, ensuring solutions that align perfectly with your
                  business goals.
                </p>
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-single animated-hover text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <img
                  src="/src/assets/fonts/artificial-intelligence.svg"
                  alt="consulting"
                  width={80}
                  className="mb-3"
                />
                <h5>Proven Expertise</h5>
                <p className="mb-0">
                  With years of industry experience, our experts bring deep
                  knowledge and innovative strategies to deliver exceptional
                  results.
                </p>
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-single animated-hover text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <img
                  src="/src/assets/fonts/data-analytics.svg"
                  alt="consulting"
                  width={80}
                  className="mb-3"
                />
                <h5>Transparent Communication</h5>
                <p className="mb-0">
                  We keep you informed every step of the way, ensuring clear and
                  honest communication to build trust and keep projects on
                  track.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-single animated-hover text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <img
                  src="/src/assets/fonts/data-security.svg"
                  alt="consulting"
                  width={80}
                  className="mb-3"
                />
                <h5>Client-Centric Approach</h5>
                <p className="mb-0">
                  Your satisfaction is our priority. We actively seek feedback
                  and make adjustments to ensure our services exceed your
                  expectations.
                </p>
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-single animated-hover text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <img
                  src="/src/assets/fonts/machine-learning.svg"
                  alt="consulting"
                  width={80}
                  className="mb-3"
                />
                <h5>Commitment to Excellence</h5>
                <p className="mb-0">
                  We deliver high-quality, scalable, and user-friendly software
                  that helps you stay competitive in the digital landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="services-single animated-hover text-center p-5 my-md-3 my-lg-3 my-sm-0 shadow-sm white-bg rounded">
                <img
                  src="/src/assets/fonts/basic.svg"
                  alt="consulting"
                  width={80}
                  className="mb-3"
                />
                <h5>Dedicated Support</h5>
                <p className="mb-0">
                  Our team is available around the clock to assist with any
                  issues or questions, providing timely and effective support.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*services section end*/}
      {/*client section start*/}
      <div className="client-section ptb-100 white-bg">
        <div className="container">
          {/*clients logo start*/}
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>Our Clients</h2>
                <p>
                  Our clients span several countries and industries, from
                  medical research institutes in Germany to multi-national
                  telecom companies in Ghana to software consultancies in
                  Switzerland and the UK.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme clients-carousel dot-indicator">
                <div className="item single-client">
                  <img
                    src="/src/assets/images/cl1.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="/src/assets/images/cl2.svg"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                {/* <div class="item single-client">
                      <img src="/src/assets/images/cl7.png" alt="client logo" class="client-img">
                  </div> */}
                <div className="item single-client">
                  <img
                    src="/src/assets/images/cl5.svg"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="/src/assets/images/cl9.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="/src/assets/images/cl10.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
                <div className="item single-client">
                  <img
                    src="/src/assets/images/cl11.png"
                    alt="client logo"
                    className="client-img"
                  />
                </div>
              </div>
            </div>
          </div>
          {/*clients logo end*/}
        </div>
      </div>
      {/*client section start*/}
    </div>
  );
};

export default Services;
