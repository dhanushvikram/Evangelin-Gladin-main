import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <>
      <section className="services" id="services">
        <h2 className="heading">
          My <span>Services</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Strategic Marketing</h3>
            <p>
              Crafting targeted marketing strategies that connect your brand with the right audience and drive measurable growth.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
          <div className="services-box">
            <i className="bx bxs-paint"></i>
            <h3>Rapid Growth</h3>
            <p>
              Accelerating your business with focused strategies that boost visibility, engagement, and revenue quickly.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
          <div className="services-box">
            <i className="bx bx-bar-chart-alt"></i>
            <h3>Real Results</h3>
            <p>
              Delivering measurable outcomes that drive growth, build trust, and create lasting impact for your brand.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section className="services" id="packages">
        <h2 className="heading">
          <span>Packages</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <h3>30-Day Clarity Sprint <br /> (Positioning + Roadmap)</h3>
            <p>
             This focused sprint is designed to help you define your unique value and create a clear, actionable plan. Over 30 days, you'll gain insight into your positioning, identify your goals, and map out the next steps to move forward with confidence and purpose.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
          <div className="services-box">
            <h3>60-Day Growth Activation <br /> (Brand + Outreach Setup)</h3>
            <p>
              This 60-day journey is built to strengthen your brand identity and establish powerful outreach channels. You'll define your brand voice, design key assets, and implement connection strategies that align with your audience, setting a strong foundation for lasting growth.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
          <div className="services-box">
            <h3>90-Day Scale-Up Support <br /> (Campaigns + Planning)</h3>
            <p>
              This 90-day phase helps you scale through strategic campaigns and performance-based planning. You'll receive expert guidance to launch, measure, and refine your efforts, ensuring your business grows with intention and adapts to changing needs effectively.
            </p>
            <Link to="#" className="btn">
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services; 