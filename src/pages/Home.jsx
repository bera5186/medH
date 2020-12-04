import React, {useState} from "react";

// assets
import Arrow from "../assets/chevron-forward-outline.svg";
import Floater from "../components/Floater";
import { Navbar } from "../components/Navbar";
import Pricing from "../components/Pricing";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../components/Animations/Spinner";




const Home = () => {

  const { loginWithRedirect, user, isLoading } = useAuth0();

  if(isLoading) {
    <Spinner />
  }
  console.log(user)
  
  // const [hash, setHash] = useState('')

  // const upload = async (e) => {
  //   const file = e.target.files[0];
  //   const added = await ipfsC.add(file, {
  //     // progress: (prog) => console.log(`received: ${prog}`),
  //   });
    
  //   setHash(toBase32(added.path));
  // };



  // const getfile = async () => {

  //   const root = document.getElementById("root")
    
  //   const img = document.createElement("img")
  //   img.src = 'https://'+hash+'.ipfs.dweb.link'

  //   root.appendChild(img)

  // };

  return (
    <>
      <Navbar />
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
            <a className="btn main__text-btn-group-patient" href onClick={() => {
              loginWithRedirect({
                screen_hint: "signup"
              })
            }}>
              <span>Make my archive</span>
              <img width="20px" height="20px" src={Arrow} alt=" >" />
            </a>
            <a className="btn main__text-btn-group-doctor" href onClick={() => {
              loginWithRedirect({
                screen_hint: "signup"
              })
            }}>
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
          <Floater
            animationDelay="0s"
            animationTime="8s"
            width="185px"
            text="Blockchain based "
            top="10%"
            left="5%"
            right=""
            bottom=""
            color="#0049A7"
          />
          <Floater
            animationDelay="0s"
            animationTime="7s"
            width="165px"
            text="Immutable Data"
            top="23%"
            left="73%"
            right=""
            bottom=""
            color="#0B6DC4"
          />
          <Floater
            animationDelay="1s"
            animationTime="6s"
            width="160px"
            text="Flexible pricing"
            top="65%"
            left="-10%"
            right=""
            bottom=""
            color="#FE7703"
          />
          <Floater
            animationDelay="3s"
            animationTime="6s"
            width="150px"
            text="100 % Secure"
            top="80%"
            left="70%"
            right=""
            bottom=""
            color="#3A8D7D"
          />
        </section>
        {/* <button
          className="btn"
          onClick={() => {
            upload();
          }}
        >
          Upload !!
        </button>
        <button
          onClick={() => {
            getfile();
          }}
        >
          get
        </button>
        <input
          type="file"
          onChange={(e) => {
            upload(e);
          }}
        /> */}
      </section>
      <Pricing />
    </>
  );
};

export default Home;
