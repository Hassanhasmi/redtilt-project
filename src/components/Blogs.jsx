import React from 'react';
import bloging from '../assets/images/bloging.jpeg'; 

const Blogs = () => {
  return (
    <>
      {/* Main Container */}
      <div className="container-fluid">
        
        {/* Section Title - "Read Our Blog" */}
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-12 text-center">
            <p>Read Our Blog</p>
          </div>
        </div>

        {/* Subtitle - Heading for Blogs */}
        <div className="row">
          <div className="col-12 text-center">
            <h2>Read Daily News About <br /> Startup Companies</h2>
          </div>
        </div>

        {/* Blog Post Card */}
        <div className="row mt-5 justify-content-center shadow rounded-3 w-75 m-auto p-4 bg-warning gy-4">
          
          {/* Blog Image Section */}
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <img src={bloging} alt="Loading..." height="180px" className="rounded-3" />
          </div>

          {/* Blog Content Section */}
          <div className="col-md-5 d-flex align-items-center justify-content-center">
            <div>
              <h3>Not Another Framework</h3>
              <p>
                We brought all the Remix goodies over to React Router and made improvements in the process.
                <br />
                Now it's time to bring those improved APIs back over to Remix where they started!
              </p>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-2 col-4">
            <button type="button" className="btn btn-danger mt-3 rounded-5">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
