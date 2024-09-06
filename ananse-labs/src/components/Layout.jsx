import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src={`/src/assets/images/${
                  location?.pathname == "/" ? "Logo" : "Logo-4"
                }.png`}
                alt="logo"
                className="img-fluid"
                style={{ height: 40, width: 140 }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="ti-menu" />
            </button>
            <div
              className="collapse navbar-collapse h-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto menu">
                <li>
                  <a href="/"> Home</a>
                </li>
                <li>
                  <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/contactus">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
      <footer className="footer-section">
        {/*footer top start*/}
        <div className="footer-top gradient-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="row footer-top-wrap">
                  <div className="col-md-3 col-sm-6">
                    <div className="footer-nav-wrap text-white">
                      <h4 className="text-white">QUICK LINKS</h4>
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="/contactus">
                            Make An Appointment
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/aboutus">
                            About Us
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/services">
                            Services
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="/policy">
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="col-md-3 col-sm-6">
                    <div className="footer-nav-wrap text-white">
                      <h4 className="text-white">LEGAL</h4>
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Legal Information
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Privacy Policy
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Terms of Service
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-md-3">
                <div className="row footer-top-wrap">
                  <div className="col-12">
                    <div className="footer-nav-wrap text-white">
                      <h4 className="text-white">GET IN TOUCH</h4>
                      <ul className="get-in-touch-list">
                        <li className="d-flex align-items-center py-2">
                          <span className="fas fa-map-marker-alt mr-2" /> P.O.
                          Box 1389, Osu Accra (Ghana), 21109 Hamburg (Germany)
                        </li>
                        <li className="d-flex align-items-center py-2">
                          <span className="fas fa-envelope mr-2" />{" "}
                          info(at)ananse-labs.com
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*footer top end*/}
        {/*footer copyright start*/}
        <div className="footer-bottom gray-light-bg py-2">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-5 col-lg-5">
                <p className="copyright-text pb-0 mb-0">Copyrights © 2024</p>
              </div>
              <div className="col-md-7 col-lg-6 d-none d-md-block d-lg-block">
                <div className="social-nav text-right">
                  <ul className="list-unstyled social-list mb-0">
                    <li className="list-inline-item tooltip-hover">
                      <a href="#" className="rounded">
                        <span className="ti-twitter" />
                      </a>
                      <div className="tooltip-item">Twitter</div>
                    </li>
                    <li className="list-inline-item tooltip-hover">
                      <a href="#" className="rounded">
                        <span className="ti-linkedin" />
                      </a>
                      <div className="tooltip-item">Linkedin</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
