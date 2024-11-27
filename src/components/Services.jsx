import React from 'react';
import { Build, Devices, Cloud, Security, CheckCircle } from '@material-ui/icons'; 

const Services = () => {
  return (
    <>
      {/* Main Container */}
      <div className="container-fluid">

        {/* Section Title */}
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-12 text-center mb-3">
            <h1>What We Offer</h1>
          </div>
        </div>

        {/* Subheading */}
        <div className="row">
          <div className="col-12 text-center">
            <span className="border border-danger rounded py-2 px-3">
              Our Expert will Help You In Following Fields
            </span>
          </div>
        </div>

        {/* Services Section - Cards for each service */}
        <div className="row justify-content-around g-3 mb-5" style={{ marginTop: '90px' }}>
          
          {/* Service 1 - Dev */}
          <div className="col-8 col-sm-4 col-md-2 bg-danger rounded-3 text-white text-center py-3">
            <span className="fs-5">01</span>
            <h3 style={{ display: 'flex', alignItems: 'center' }}>
              <Build style={{ marginRight: '10px' }} /> Dev
            </h3>
            {/* Service 1 - List of Subservices */}
            <ul className="list-unstyled" style={{ paddingLeft: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Ui/Ux
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> DevOps
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Web Design
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Frontend Dev
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Backend Dev
              </li>
            </ul>
          </div>

          {/* Service 2 - MSP */}
          <div className="col-8 col-sm-4 col-md-2 bg-danger rounded-3 text-white text-center py-3">
            <span className="fs-5">02</span>
            <h3 style={{ display: 'flex', alignItems: 'center' }}>
              <Devices style={{ marginRight: '10px' }} /> MSP
            </h3>
            {/* Service 2 - List of Subservices */}
            <ul className="list-unstyled" style={{ paddingLeft: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Ui/Ux
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> DevOps
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Web Design
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Frontend Dev
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Backend Dev
              </li>
            </ul>
          </div>

          {/* Service 3 - Cloud */}
          <div className="col-8 col-sm-4 col-md-2 bg-danger rounded-3 text-white text-center py-3">
            <span className="fs-5">03</span>
            <h3 style={{ display: 'flex', alignItems: 'center' }}>
              <Cloud style={{ marginRight: '10px' }} /> Cloud
            </h3>
            {/* Service 3 - List of Subservices */}
            <ul className="list-unstyled" style={{ paddingLeft: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Ui/Ux
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> DevOps
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Web Design
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Frontend Dev
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Backend Dev
              </li>
            </ul>
          </div>

          {/* Service 4 - Cyber */}
          <div className="col-8 col-sm-4 col-md-2 bg-danger rounded-3 text-white text-center py-3">
            <span className="fs-5">04</span>
            <h3 style={{ display: 'flex', alignItems: 'center' }}>
              <Security style={{ marginRight: '10px' }} /> Cyber
            </h3>
            {/* Service 4 - List of Subservices */}
            <ul className="list-unstyled" style={{ paddingLeft: '20px' }}>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Ui/Ux
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> DevOps
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Web Design
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Frontend Dev
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircle style={{ marginRight: '10px' }} /> Backend Dev
              </li>
            </ul>
          </div>
        </div>

      </div>
    </>
  );
}

export default Services;
