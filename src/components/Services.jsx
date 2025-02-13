import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="container">
        <div className="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PNOcVpJ2F_GxAw0NL2cdAyrWBTor-rVF4w&s" alt="Service 1" />
          <div className="content">
            <h2>Service 1</h2>
            <p>We provide cutting-edge technology solutions to help businesses grow and innovate.</p>
          </div>
        </div>
        <div className="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PNOcVpJ2F_GxAw0NL2cdAyrWBTor-rVF4w&s" alt="Service 2" />
          <div className="content">
            <h2>Service 2</h2>
            <p>Expert financial consulting for businesses looking to scale effectively.</p>
          </div>
        </div>
        <div className="box">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PNOcVpJ2F_GxAw0NL2cdAyrWBTor-rVF4w&s" alt="Service 3" />
          <div className="content">
            <h2>Service 3</h2>
            <p>Data analysis and visualization to provide meaningful insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
