import React, { useContext, useState } from "react";
import { UiContext } from "../context/UiContext";
import { StateContext } from "../context/StateContext";

import { ipfsC, toBase32 } from "../ipfs/index";

const ModalForm = () => {
  const { modal, loading } = useContext(UiContext);
  const { fileHash, fileName, fileDesc } = useContext(StateContext);
  
  const [modalState, setModalState] = modal;
  const [loadingState, setLoadingState] = loading;

  const [name, setName] = fileName;
  const [desc, setDesc] = fileDesc;
  const [hash, setHash] = fileHash;

  const [file, setFile] = useState([]);

  const upload = async () => {
    console.log(loadingState);
    setLoadingState(true);

    if (file) {
      const added = await ipfsC.add(file);
      console.log(added);
      setHash(toBase32(added.path));
      console.log(
        `file uploaded with name : ${file.name} desc: ${desc} title: ${name} hash: ${hash}`
      );
      setLoadingState(false);
    }
  };
  return (
    <>
      <h2 className="modal__content__title">Enter Details</h2>
      <form className="modal__content__form">
        <input
          type="text"
          placeholder="Document Name"
          className="modal__content__form--docn"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <textarea
          className="modal__content__form--docd"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="enter Description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
        <input
          type="file"
          name=""
          id=""
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <section className="modal__content__form--btngroup">
          <a
            className="btn-submit"
            style={{ marginRight: "10px" }}
            onClick={() => {
              upload();
            }}
          >
            Submit
          </a>
          <a
            className="btn-close"
            onClick={(e) => {
              e.preventDefault();
              setModalState("none");
            }}
          >
            Close
          </a>
        </section>
      </form>
    </>
  );
};

export default ModalForm;
