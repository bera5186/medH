import React, { useContext } from "react";
import { UiContext } from "../context/UiContext";

import Spinner from "./Animations/Spinner";
import ModalForm from "./ModalForm";
import SearchModalForm from "./SearchModalForm";

const Searchmodal = () => {
  
  const { searchModal } = useContext(UiContext);
  
  const [modalState, setModalState] = searchModal ;

  return (
    <>
      <div className="modal" style={{ display: modalState }}>
        <section className="modal__content">
          <ModalForm />
        </section>
      </div>
    </>
  );
};

export default Searchmodal;
