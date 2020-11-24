import React from "react";

// assets
import Arrow from "../assets/chevron-forward-outline.svg";
import Floater from "../components/Floater";
import Pricing from "../components/Pricing";

const Home = () => {


  return (
    <>
      <section className="main container">
        <section className="main__text">
          <h3 className="main__text-primary">
            Your Secure Medical History Archive
          </h3>
          <p className="main__text-secondary">
            We enable users to create archive of their entire medical history
            from prescriptions to reports to xrays.Everything is stored on
            blockchain to ensure 100% security and immutability.
          </p>
          <section className="main__text-btn-group">
            <a
              className="btn main__text-btn-group-patient"
              href="/"
            >
              <span>I am a patient</span>
              <img width="20px" height="20px" src={Arrow} alt=" >" />
            </a>
            <a className="btn main__text-btn-group-doctor" href="/">
              <span>I am a doctor</span>
              <img width="20px" height="20px" src={Arrow} alt=" >" />
            </a>
          </section>
        </section>
        <section className="main__image">
          <img
            width="600x"
            height="500px"
            src="https://cdn.dribbble.com/users/1355613/screenshots/6637974/doctor.jpg"
            alt="medh"
          />
          <Floater animationTime="10s" width="185px" text="Blockchain based " top="10%" left="5%" right="" bottom="" color="#0049A7" />
          <Floater animationTime="12s" width="165px" text="Immutable Data" top="23%" left="73%" right="" bottom="" color="#0B6DC4" />
          <Floater animationTime="10s" width="160px" text="Flexible pricing" top="65%" left="-10%" right="" bottom="" color="#FE7703" />
          <Floater animationTime="12s" width="150px" text="100 % Secure" top="80%" left="70%" right="" bottom="" color="#3A8D7D" />
        </section>
      </section>
      <Pricing />
    </>
  );
};

export default Home;
