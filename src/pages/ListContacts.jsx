import React, { useState, useEffect, useCallback } from "react";
import ButtonAdd from "../component/ButtonAdd";
import Contact from "../component/Contact";
import { Link } from "react-router-dom";
import "../pages/contacts/index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContact } from "../redux/reducer/contact/contactSlice";
import axios from "axios";

const ListContacts = () => {
  const [contacts, setContacts] = useState([]);
  // const contacts = useSelector((state) => state.contacts.dataContact);
  // const dispatch = useDispatch();
  // console.log("data contacts>>>", contacts )
  console.log("contact>>>", contacts)

  //panggil service api disini
  //respondnya dispatch ke fetchcontact

  useEffect(() => {
    axios.get('http://localhost:8000/contacts').then((response) => {
      setContacts(response.data);
  })
  }, []);

  return (
    <div id="form-contact">
      <div className="container max-w-md mx-auto pt-10">
        <div className="max-w-md h-[90vh] rounded-[2rem] mx-auto overflow-hidden shadow-lg bg-white pl-3">
          <p className="text-3xl pb-5 pt-3 pl-3 font-bold">Contacts</p>
          {/* {contacts.map((contact, index) => (
            <div key={contact.id}> */}
            <Contact
            nama={contacts.name}
            number={contacts.number}
            email={contacts.email}
          />
          {/* </div>
          ))} */}

          {/* <Contact
            nama="Christine liem"
            number="0897890909"
            email="christine@yahoo.com"
          /> */}
          
          <Link to="/add-contact">
            <ButtonAdd />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListContacts;
