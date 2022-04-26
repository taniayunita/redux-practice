import React, { useState, useEffect, useCallback } from "react";
import ButtonAdd from "../component/ButtonAdd";
import Contact from "../component/Contact";
import { Link } from "react-router-dom";
import "../pages/contacts/index.css";
import { useDispatch, useSelector } from "react-redux";

const ListContacts = () => {
  return (
    <div id="form-contact">
      <div className="container max-w-md mx-auto pt-10">
        <div className="max-w-md h-[90vh] rounded-[2rem] mx-auto overflow-hidden shadow-lg bg-white pl-3">
          <p className="text-3xl pb-5 pt-3 pl-3 font-bold">Contacts</p>
          <Contact
            nama="Tania Yunita"
            number="089765354"
            email="taniayunita@gmail.com"
          />
          <Contact
            nama="Tania Yunita"
            number="089765354"
            email="taniayunita@gmail.com"
          />
          <Contact
            nama="Tania Yunita"
            number="089765354"
            email="taniayunita@gmail.com"
          />
          <Link to="/add-contact">
            <ButtonAdd />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListContacts;
