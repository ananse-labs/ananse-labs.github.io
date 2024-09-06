const AboutUs = () => {
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
                <h1 className="text-white mb-0">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*header section end*/}
      {/*about us section start*/}
      <section className="about-us-section ptb-100">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-12 col-lg-5">
              <div className="video-promo-content mb-md-4 mb-lg-0">
                <h2>First Class Business Solutions</h2>
                <p>
                  At the forefront of AI innovation, we actively cultivate
                  specialized markets with precision, anticipating emerging
                  imperatives. We expertly transform adaptable growth
                  strategies, ensuring the seamless integration of cutting-edge
                  AI technologies into your core competencies.
                </p>
                <ul className="list-unstyled tech-feature-list">
                  <li className="py-1">
                    <span className="ti-check-box mr-2 color-secondary" />
                    <strong>Pioneering</strong>
                    AI Insights
                  </li>
                  <li className="py-1">
                    <span className="ti-check-box mr-2 color-secondary" />
                    <strong>Reimagining</strong>
                    Financial Strategies
                  </li>
                  <li className="py-1">
                    <span className="ti-check-box mr-2 color-secondary" />
                    <strong>Data-Infused</strong>Business Optimization
                  </li>
                  <li className="py-1">
                    <span className="ti-check-box mr-2 color-secondary" />
                    <strong>Reliable</strong>Solutions
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="card border-0 shadow-sm text-white">
                <img
                  src="/src/assets/images/about-2.jpg"
                  alt="video"
                  className="img-fluid rounded shadow-sm"
                />
                {/* <div class="card-img-overlay text-center">
                      <a href="https://www.youtube.com/watch?v=9No-FiEInLA" class="popup-youtube video-play-icon color-bip shadow"><span class="ti-control-play"></span> </a>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*about us section end*/}
      {/*our work process section start*/}
      <section className="work-process-new ptb-100 gray-light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-lg-8">
              <div className="section-heading text-center mb-5">
                <h2>Our AI-Powered Workflow</h2>
                <p className="lead">
                  We have engineered a unique workflow tailored to our AI
                  narrative, designed to cultivate cutting-edge solutions and
                  drive technological advancement
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="work-process-wrap text-center">
                <div className="single-work-process">
                  <div className="work-process-icon-wrap secondary-bg rounded">
                    <i className="ti-vector icon-md text-white" />
                    <span className="process-step primary-bg text-white shadow-sm">
                      1
                    </span>
                  </div>
                  <span className="work-process-divider" />
                  <div className="work-process-content mt-4">
                    <h5>Data Transformation</h5>
                    <p style={{ textAlign: "left" }}>
                      {" "}
                      Unleash the power of raw data through our advanced
                      transformation process, turning information into
                      actionable insights.
                    </p>
                  </div>
                </div>
                <div className="single-work-process">
                  <div className="work-process-icon-wrap secondary-bg rounded">
                    <i className="ti-layout-list-thumb icon-md text-white" />
                    <span className="process-step primary-bg text-white shadow-sm">
                      2
                    </span>
                  </div>
                  <span className="work-process-divider" />
                  <div className="work-process-content mt-4">
                    <h5>AI Algorithm</h5>
                    <p style={{ textAlign: "left" }}>
                      Harness the capabilities of our AI algorithms to extract
                      meaningful patterns, trends, and knowledge from your data,
                      providing invaluable insights.
                    </p>
                  </div>
                </div>
                <div className="single-work-process">
                  <div className="work-process-icon-wrap secondary-bg rounded">
                    <i className="ti-palette icon-md text-white" />
                    <span className="process-step primary-bg text-white shadow-sm">
                      3
                    </span>
                  </div>
                  <span className="work-process-divider" />
                  <div className="work-process-content mt-4">
                    <h5>Data Insights</h5>
                    <p style={{ textAlign: "left" }}>
                      Dive deep into refined data sets to uncover valuable
                      information, enabling informed decision-making and
                      strategic planning for your business.
                    </p>
                  </div>
                </div>
                <div className="single-work-process">
                  <div className="work-process-icon-wrap secondary-bg rounded">
                    <i className="ti-cup icon-md text-white" />
                    <span className="process-step primary-bg text-white shadow-sm">
                      4
                    </span>
                  </div>
                  <span className="work-process-divider" />
                  <div className="work-process-content mt-4">
                    <h5>Predictive Intelligence</h5>
                    <p style={{ textAlign: "left" }}>
                      Elevate your decision-making with our predictive
                      analytics, utilizing cutting-edge algorithms to forecast
                      trends and anticipate future developments in your
                      industry.
                    </p>
                  </div>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="customer-testimonial-section ptb-100 gray-light-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-8">
              <div className="section-heading text-center mb-4">
                <h2>Our Core Values</h2>
                <p className="lead" />
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-lg-5">
              <div>
                <p>
                  We are an AI-driven data analytics and machine learning
                  insights company on a mission to transform the way businesses
                  operate in today's data-centric world. Our journey began with
                  a vision to revolutionize decision-making processes and
                  empower businesses of all sizes with the remarkable
                  capabilities of AI and data analysis. In an era where data is
                  a strategic asset, we have consistently pushed the boundaries
                  of technology and innovation to provide cutting-edge
                  solutions.{" "}
                </p>
                <p>
                  Our team is a collective force of experts, driven by a shared
                  passion for unlocking the true potential of data. We are here
                  to help you navigate the complexities of data-driven
                  decision-making, fostering growth and sustainable success for
                  your business.Our commitment to excellence extends beyond our
                  technological prowess. We believe in forging strong
                  partnerships with our clients, working collaboratively to
                  achieve goals and aspirations.{" "}
                </p>
                <p>
                  At our core, we are driven by a desire to see your business
                  thrive, and we take pride in being your trusted partner on
                  this transformative journey.With a relentless pursuit of
                  innovation, a dedication to fostering strategic partnerships,
                  and a team of experts who are passionate about what they do,
                  we are your go-to partner for AI-driven data analytics and
                  machine learning insights.
                </p>
                <p className="font-weight-bold">
                  Join us in shaping the future of data-powered business.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="about-img-wrap">
                <img
                  src="/src/assets/images/about-us.jpg"
                  alt="video"
                  className="img-fluid rounded shadow-sm"
                />
                {/* <div class="card-img-overlay text-center">
                          <a href="https://www.youtube.com/watch?v=9No-FiEInLA" class="popup-youtube video-play-icon color-bip shadow"><span class="ti-control-play"></span> </a>
                      </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
