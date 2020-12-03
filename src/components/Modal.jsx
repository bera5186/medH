import React, { useContext, useState } from "react";
import { UiContext } from "../context/UiContext";

import Spinner from "./Animations/Spinner";
import ModalForm from "./ModalForm";

const Modal = () => {
  
  const { modal, loading } = useContext(UiContext);
  const [modalState, setModalState] = modal;
  const [loadingState, setLoadingState] = loading;

  return (
    <>
      <div className="modal" style={{ display: modalState }}>
        <section className="modal__content">
          {
            loadingState === true ? <Spinner /> : <ModalForm />
          }
        </section>
      </div>
    </>
  );
};

export default Modal;
