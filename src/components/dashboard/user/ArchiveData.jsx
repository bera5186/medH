import React, { useContext } from 'react';

// context
import { UiContext } from "../../../context/UiContext";

// assets
import AddIcon from "../../../assets/add-circle-outline.svg"
import Modal from '../../Modal';
import DataTable from './DataTable';

// 3rd party
import { Link } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

// component
import Spinner from '../../Animations/Spinner';

const ArchiveData = () => {

    const { modal } = useContext(UiContext);
    const [modalState, setModalState] = modal;

    
    return (
        <div className="archivehome container">
            <Modal />
            <h1 className="archivehome__text">
                Your Archive
            </h1>
            <section className="archivehome__addnew">
            <Link onClick={ () => { setModalState("block") } } className="archivehome__addnew-btn" href="/">
              <span>Add New Record</span>
              <img className="archivehome__addnew-btn--img" width="27px" height="27px" src={AddIcon} alt="" />
            </Link>
            </section>
            <section className="archivehome__data">
                <DataTable />
            </section>
        </div>
    )
}

export default withAuthenticationRequired(ArchiveData, {
    onRedirecting: () => <Spinner />

  });
