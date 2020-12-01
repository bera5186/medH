import React from 'react';
import { Link } from "react-router-dom"

// assets
import AddIcon from "../../../assets/add-circle-outline.svg"

const ArchiveData = () => {
    return (
        <div className="archivehome container">
            <h1 className="archivehome__text">
                Your Archive
            </h1>
            <section className="archivehome__addnew">
            <Link className="archivehome__addnew-btn" href="/">
              <span>Add New Record</span>
              <img className="archivehome__addnew-btn--img" width="27px" height="27px" src={AddIcon} alt="" />
            </Link>
            </section>
            <section className="archivehome__data">
                Some Sexy data Soon....
            </section>
        </div>
    )
}

export default ArchiveData
