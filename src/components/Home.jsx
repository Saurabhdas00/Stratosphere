import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container-wrapper">
      <div className="container1">
        <div className="content">
          <h1>We help businesses grow and innovate</h1>
          <h2>
            We are an independent financial consulting firm specializing in strategic advice, debt capital solutions, and data visualization and analysis.
          </h2>
        </div>
        <div className="img">
          <img src="https://media.licdn.com/dms/image/D4D12AQFBD0Ix2Y-g1w/article-cover_image-shrink_600_2000/0/1690880909088?e=2147483647&v=beta&t=artaOM02qWWo7_QxYdaW2qiiMmxOdGI1xLql-GUnU6s" alt="home" />
        </div>
      </div>

      <div className="container2">
        <div className="img2">
          <img src="https://media.licdn.com/dms/image/D4D12AQFBD0Ix2Y-g1w/article-cover_image-shrink_600_2000/0/1690880909088?e=2147483647&v=beta&t=artaOM02qWWo7_QxYdaW2qiiMmxOdGI1xLql-GUnU6s" alt="home" />
        </div>
        <div className="content2">
          <h1>We help businesses grow and innovate</h1>
          <h2>
            We are an independent financial consulting firm specializing in strategic advice, debt capital solutions, and data visualization and analysis.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
