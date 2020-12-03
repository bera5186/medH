import React, { useContext } from "react";
import Lottie from "react-lottie";
import SpinnerAnimation from "../../assets/lotties/spinner.json";

const Spinner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SpinnerAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="spinnercontainer">
      <div className="spinner">
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
      </div>
    </div>
  );
};

export default Spinner;
