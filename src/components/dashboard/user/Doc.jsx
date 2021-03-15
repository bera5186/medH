import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { InstantSearch, SearchBox, Hits, connectAutoComplete } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Spinner from "../../Animations/Spinner";

import { UiContext } from "../../../context/UiContext";
import Searchdoc from "./Searchdoc";

const axios = require("axios").default;


const Doc = () => {
  const [data, setData] = useState({});
  const _id = useParams().docid;

  const { searchModal } = useContext(UiContext);
  const [_, setModalState] = searchModal;


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post("http://medh.herokuapp.com/getdata", {
        id: _id,
      });

      setData(res.data);
    };

    fetchData();
  }, [_id]);

  return (
    <>
        <div className="doc container">
            <section className="doc__info">
                <Searchdoc />
                <h1 className="doc__info-title">{data.name}</h1>
                <p className="doc__info-desc">{data.desc}</p>
                <p className="doc__info-hash">File Hash : {' '+data.hash}</p>
                <p className="doc__info-doctor">Diagnosed By: {' '+data.doctor}</p>
                <p className="doc__info-date">Date: {' '+data.date}</p>
                <p className="doc__info-upload">Date Uploaded: {' '+data.dateCreated}</p>
                <section className="doc__info-btnG">
                    <a className="btn doc-btn" style={{marginLeft:"30px"}} href={data.ipfsURL} download>Download</a>
                </section>
            </section>
            <section className="doc__image">
                <img width="350px"  height="530px" src={data.ipfsURL} alt="" className="doc__image-img"/>
            </section>
        </div>
    </>
  );
};

export default withAuthenticationRequired(Doc, {
    onRedirecting: () => <Spinner />

  });
