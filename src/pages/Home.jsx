import React from "react";

// assets
import Hero from "../assets/pale-doctor.png"
import Arrow from "../assets/chevron-forward-outline.svg"



const Home = () => {

    return (
        <section className="main container">
            <section className="main__text">
                <h3 className="main__text-primary">
                    Your Secure Medical History Archive
                </h3>
                <p className="main__text-secondary">
                    We enable users to create archive of their entire medical history from prescriptions to reports to xrays.Everything is stored on blockchain to ensure 100% security and immutability.
                </p>
                <section className="main__text-btn-group">
                    <a className="btn main__text-btn-group-patient">
                        <span>I am a patient</span>
                        <img width="20px" height="20px" src={Arrow} alt=""/>
                    </a>
                    <a className="btn main__text-btn-group-doctor">
                        <span>I am a doctor</span>
                        <img width="20px" height="20px" src={Arrow} alt=""/>
                    </a>
                </section>
            </section>
            <section className="main__image">
                <img width="600x" height="500px" src="https://cdn.dribbble.com/users/1355613/screenshots/6637974/doctor.jpg" />
            </section>
        </section>
    )
};

export default Home;