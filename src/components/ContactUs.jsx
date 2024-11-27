import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle"; 

const ContactUs = () => {
  return (
    <>
      {/* Main container for the Contact Us section */}
      <div
        className="container-fluid d-flex align-items-start justify-content-center"
        style={{ marginTop: "100px", minHeight: "100vh" }}
      >
        <div className="row gy-3 w-75 mb-5">
          
          {/* Reserve a Call Section */}
          <div className="col-md-5 border rounded-3 p-4">
            <p>Got a project in mind</p>
            <h3>Reserve a Call</h3>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {/* Each list item in the Reserve a Call section */}
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                {/* CheckCircleIcon used for bullets */}
                <CheckCircleIcon
                  style={{
                    color: "red",
                    marginRight: "0.5rem",
                    marginTop: "0.3rem",
                  }}
                />
                <span>
                  An in-depth session to <br />
                  understand your needs
                </span>
              </li>

              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <CheckCircleIcon
                  style={{
                    color: "red",
                    marginRight: "0.5rem",
                    marginTop: "0.3rem",
                  }}
                />
                <span>
                  Learn which plan is right <br />
                  for your team
                </span>
              </li>

              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                }}
              >
                <CheckCircleIcon
                  style={{
                    color: "red",
                    marginRight: "0.5rem",
                    marginTop: "0.3rem",
                  }}
                />
                <span>Get onboarding help</span>
              </li>
            </ul>
            <p>
              Technical support or some query? <br />
              <a href="mailto:support@company.com">Contact support &rarr;</a>
            </p>
          </div>

          {/* Contact Form Section */}
          <div className="col-md-8 col-lg-6 mx-auto p-4 border rounded-3">
            <h3 className="text-center mb-4">Tell us about yourself</h3>
            <hr />
            <form>
              {/* Full Name input field */}
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Work Email input field */}
              <div className="mb-3">
                <label htmlFor="workEmail" className="form-label">
                  Work Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="workEmail"
                  placeholder="Enter your work email"
                />
              </div>

              {/* Company Size input field */}
              <div className="mb-3">
                <label htmlFor="companySize" className="form-label">
                  Company Size
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="companySize"
                  placeholder="Enter your company size"
                />
              </div>

              {/* How can we help? (Textarea for message) */}
              <div className="mb-3">
                <label htmlFor="helpMessage" className="form-label">
                  How can we help?
                </label>
                <textarea
                  className="form-control"
                  id="helpMessage"
                  rows="4"
                  placeholder="Tell us how we can assist you"
                ></textarea>
              </div>

              {/* Contact Info & Submit Button */}
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
                <div className="mb-3 mb-md-0">
                  <p className="mb-0">
                    You can also email us at <br />
                    <a
                      href="mailto:Apac@Redtilt.Team"
                      className="text-danger fw-bold"
                    >
                      Apac@Redtilt.Team
                    </a>
                  </p>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-danger rounded-pill px-4 py-2"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
