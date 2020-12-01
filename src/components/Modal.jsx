import React, { useContext, useState } from "react";
import { UiContext } from "../context/UiContext";

import { ipfsC, toBase32 } from "../ipfs/index";

const Modal = () => {
  const [modalState, setModalState] = useContext(UiContext);
  
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState([])
  const [hash, setHash] = useState('')

  const upload = async () => {

    if(file) {
        const added = await ipfsC.add(file)
        console.log(added);
        setHash(toBase32(added.path))
        console.log(`file uploaded with name : ${file.name} desc: ${desc} title: ${name} hash: ${hash}`)
    }
  }


  return (
    <div className="modal" style={{ display: modalState }}>
      <section className="modal__content">
        <h2 className="modal__content__title">Enter Details</h2>
        <form className="modal__content__form">
          <input type="text" placeholder="Document Name" className="modal__content__form--docn" onChange={(e) => { setName(e.target.value)}} />
          <textarea
            className="modal__content__form--docd"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="enter Description"
            onChange={(e) => { setDesc(e.target.value)}}
          ></textarea>
          <input type="file" name="" id="" onChange={e => { setFile(e.target.files[0])}} />
          <section className="modal__content__form--btngroup">
            <a className="btn-submit" style={{marginRight:"10px"}} onClick={() => { upload() }}>Submit</a>
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
      </section>
    </div>
  );
};

export default Modal;
