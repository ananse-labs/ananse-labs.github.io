import { useEffect, useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [payload, setPayload] = useState({});
  const [error, setError] = useState();

  const sendMail = async () => {
    let message = "";
    if (!payload?.name) {
      message = "Full name is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload?.email))
      message = "Email address is invalid";
    else if (!payload?.body) {
      message = "Please enter your message to proceed";
    }

    if (message) {
      setError(
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Validation!</strong> {message}
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
      return;
    }

    try {
      const baseUrl = "https://sentinel-api.ananse-labs.com/";
    let data = new FormData();  
      data.append("username", "email");
      data.append("password", "email123");

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${baseUrl}token`,
        data: data,
      };

      const token = await axios.request(config);

      config.data = {
        name: payload?.name,
        email: payload?.email,
        subject: "Website Contact Mail",
        message: payload?.body,
      };
      config.url = `${baseUrl}send-message`;
      config.headers = { Authorization: `Bearer ${token?.data?.access_token}` };

      const email = await axios.request(config);
      setPayload({ name: "", email: "", message: "" });
      setError(
        <div
          class="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Success!</strong> {"Mail sent successfully"}
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    } catch (err) {
      console.log(err);
      setError(
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <strong>Error!</strong>{" "}
          {error?.response?.data?.detail ||
            "Unable to send the message at this time"}
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // setError("");
    }, 5000);
  }, [error]);

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
                <h1 className="text-white mb-0">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*header section end*/}
      {/*contact us section start*/}
      <section className="contact-us-section ptb-100">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-md-12">
              <div className="contact-us-form gray-light-bg rounded p-5">
                <h4>Ready to get started?</h4>
                <p>
                  Your journey towards excellence begins with a simple
                  conversation. Our team is ready to listen, understand your
                  unique needs, and tailor solutions that align perfectly with
                  your goals. Get in touch with us today! Whether you have
                  questions, need assistance, or are ready to explore innovative
                  solutions, our team is here to help. Reach out and let us
                  guide you toward success.
                </p>
              </div>
            </div>
            <div id="alertContainer" />
            <div className="row justify-content-around">
              <div className="col-md-6">
                <div className="contact-us-form rounded py-5">
                  {error}
                  <form
                    action="#"
                    method="POST"
                    id="contactForm1"
                    className="contact-us-form"
                    noValidate="novalidate"
                  >
                    <div className="form-row">
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter name"
                            required="required"
                            value={payload?.name}
                            onChange={(e) =>
                              setPayload((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter email"
                            required="required"
                            value={payload?.email}
                            onChange={(e) =>
                              setPayload((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            rows={7}
                            cols={25}
                            placeholder="Message"
                            defaultValue={""}
                            value={payload?.body}
                            onChange={(e) =>
                              setPayload((prev) => ({
                                ...prev,
                                body: e.target.value,
                              }))
                            }
                          >
                            {payload?.body}
                          </textarea>
                        </div>
                      </div>
                      <div className="col-sm-12 mt-3">
                        <button
                          type="button"
                          className="btn secondary-solid-btn"
                          id="btnContactUs"
                          onClick={() => sendMail()}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-us-form p-5">
                  <div>
                    <div className="pb-2">
                      <span className="ti-location-pin icon-sm color-secondary" />
                    </div>
                    <h5 className="mb-0">Locations</h5>
                    <p className="text-muted mb-0">
                      <strong>Ghana</strong> <br />
                      P.O.Box 1389, Osu <br />
                      <br />
                      <strong>Germany</strong>
                      <br /> 21109 Hamburg
                    </p>
                  </div>
                  <br />
                  <br />
                  <div>
                    <div className="pb-2">
                      <span className="ti-email icon-sm color-secondary" />
                    </div>
                    <h5 className="mb-0">Mail Us</h5>
                    <p className="text-muted mb-0">
                      {" "}
                      <a
                        href="mailto:info@ananse-labs.com"
                        className="link-color"
                      >
                        info(at)ananse-labs.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*contact us section end*/}
    </div>
  );
};

export default ContactUs;
