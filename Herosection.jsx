// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
      <div className="hero-section d-flex align-items-center justify-content-center text-white text-center px-3">
        <div className="overlay"></div>
        <div className="content w-100">
          <h1 className="display-5 display-md-4 display-lg-3 fw-bold">
            Unlimited movies, TV shows and more.
          </h1>
          <h5 className="fw-light mb-4">
            Watch anywhere. Cancel anytime.
          </h5>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control py-2 py-md-3"
                  placeholder="Email address"
                />
                <button className="btn btn-danger px-3 px-md-4 py-2 py-md-3">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  


export default HeroSection;
