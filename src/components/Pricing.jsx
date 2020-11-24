import React from "react";


const Pricing = () => {
  return (
    <section className="pricing">
      <h1 className="pricing__title">Pricing</h1>
      <p className="leading">
        Get the unlimited access to blockchain network for storing your medical
        history.
      </p>
      <p className="leading l-2">
        Everything at a flexible pricing that our customers love.
      </p>

      <div className="container pricing__card">
        <div className="pricing__card-1">
          <div className="pricing__card-1--header">
            <h2 className="price">&#8377;500</h2>
            <span className="mo">/mo</span>
          </div>
          <div className="pricing__card-1--body">
            <ul className="feature-list-wrapper">
              <li className="feature-list-wrapper__item">
                Acess to Unlimited storage
              </li>
              <li className="feature-list-wrapper__item">Lifetime Storage</li>
              <li className="feature-list-wrapper__item">Monthly Analytics</li>
              <li className="feature-list-wrapper__item">24 X 7 Support</li>
            </ul>
          </div>
        </div>

        <div className="pricing__card-2">
          <div className="pricing__card-2--header">
            <h2 className="price">&#8377;800</h2>
            <span className="mo">/mo</span>
          </div>
          <div className="pricing__card-2--body">
            <ul className="feature-list-wrapper">
              <li className="feature-list-wrapper__item">
                Acess to Unlimited storage
              </li>
              <li className="feature-list-wrapper__item">Unlimited Clients</li>
              <li className="feature-list-wrapper__item">Monthly Analytics</li>
              <li className="feature-list-wrapper__item">24 X 7 Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
