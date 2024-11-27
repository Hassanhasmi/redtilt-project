import React from 'react';
import { Phone } from '@material-ui/icons'; 
// Importing images for the cloud services logos
import digitalocean from '../assets/images/digitalocean.png';
import azure from '../assets/images/azure.png';
import github from '../assets/images/github.png';
import googlecloud from '../assets/images/googlecloud.png';
import linode from '../assets/images/linode.png';
import cloudflare from '../assets/images/cloudflare.png';

const Home = () => {
  return (
    <>
      {/* Hero Section: Main Heading and Call-to-Action */}
      <div className="container-fluid">
        <div className="row" style={{ marginTop: '80px' }}>
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="text-center">
              {/* Main Heading */}
              <h1>From Concept To Code</h1>
              {/* Subheading with a warning text color */}
              <h1 className="text-warning fw-bolder">We Make It Happen</h1>
              {/* Descriptive Text */}
              <span className="fs-6">
                We Help Brands And B2B Enterprises Build Amazing <br />
                Websites That Convert Their Visitors To Paying Customers
              </span>
              <br />
              {/* Button to initiate a call */}
              <button type="button" className="btn btn-danger mt-3 rounded-5">
                <Phone style={{ marginRight: '3px' }} /> {/* Phone icon inside the button */}
                Let's have a call
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Services Logos Section */}
      <div className="row" style={{ marginTop: '100px' }}>
        {/* Each column contains a logo with text, adjusting for screen size */}
        <div className="col-4 col-sm-2 text-center">
          <img src={digitalocean} alt="Digitalocean" className="img-fluid" />
          <p>Digitalocean</p>
        </div>
        <div className="col-4 col-sm-2 text-center">
          <img src={azure} alt="Azure" className="img-fluid" />
          <p>Azure</p>
        </div>
        <div className="col-4 col-sm-2 text-center">
          <img src={github} alt="Github" className="img-fluid" />
          <p>Github</p>
        </div>
        <div className="col-4 col-sm-2 text-center">
          <img src={googlecloud} alt="Googlecloud" className="img-fluid" />
          <p>Googlecloud</p>
        </div>
        <div className="col-4 col-sm-2 text-center">
          <img src={linode} alt="Linode" className="img-fluid" />
          <p>Linode</p>
        </div>
        <div className="col-4 col-sm-2 text-center">
          <img src={cloudflare} alt="Cloudflare" className="img-fluid" />
          <p>Cloudflare</p>
        </div>
      </div>
    </>
  );
};

export default Home;
