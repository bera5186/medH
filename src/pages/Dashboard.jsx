import React, { useContext } from "react";

// components
import ArchiveData from "../components/dashboard/user/ArchiveData";
import Spinner from "../components/Animations/Spinner";

// context
import { UiContext } from "../context/UiContext";

// auth0
import { withAuthenticationRequired } from "@auth0/auth0-react";



const Dashboard = () => {
  const { loading } = useContext(UiContext);
  const [loadingState, setLoadingState] = loading;

  return (
    <>
    <div className="dashboard">
      <ArchiveData />
      
    </div>
    {loadingState == true ? <Spinner /> : ""}
    </>
  );
};

export default withAuthenticationRequired(Dashboard, {
  onRedirecting: () => <Spinner />
});
