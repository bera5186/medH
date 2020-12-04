import React, { useContext, useState } from "react";

// state context
import { UiContext } from "../context/UiContext";
import { StateContext } from "../context/StateContext";

// ipfs
import { ipfsC, toBase32 } from "../ipfs/index";

// auth
import { useAuth0 } from "@auth0/auth0-react";

// css
import "react-datepicker/dist/react-datepicker.css";

// 3rd party
import DatePicker from "react-datepicker";
import { useToasts } from "react-toast-notifications";
const axios = require("axios").default;


const ModalForm = () => {

  const { modal, loading } = useContext(UiContext);
  const { fileHash, fileName, fileDesc } = useContext(StateContext);
  const { user } = useAuth0();
  const { email } = user;

  const [modalState, setModalState] = modal;
  const [loadingState, setLoadingState] = loading;

  const [name, setName] = fileName;
  const [desc, setDesc] = fileDesc;
  const [hash, setHash] = fileHash;

  const [file, setFile] = useState([]);
  const [date, setDate] = useState(new Date());
  const [doctor, setDoctor] = useState("");

  const { addToast } = useToasts();

  const upload = async () => {
  
    setLoadingState(true);

    if (file) {
      const added = await ipfsC.add(file); // post the file to ipfs
      setHash(toBase32(added.path)); // get the v1 Hash
    
      setLoadingState(false);

      // posting the data to our server
      const data = {
        hash: toBase32(added.path),
        email: email,
        name: name,
        desc: desc,
        doctor: doctor,
        date: date,
      };
      
      const res = await axios.post('http://localhost:8000/createfile', data)

      if(res.status === 201) {
        addToast('File Upload Succesfull', { appearance: 'success'})
      } else {
        addToast('Upload Failed ! Try Again', { appearance: 'error'})
      }
      setModalState("none")
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
          type="text"
          placeholder="Daigonosed/Done by"
          onChange={(e) => setDoctor(e.target.value)}
          className="modal__content__form--docn"
        />
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          className="modal__content__form--docn"
        />
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
