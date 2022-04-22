import React from "react";
import Contact from "../component/Contact";
import "../pages/contacts/index.css";

const ListContacts = () => {
  return (
    <div id="add-contact">
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

          <button className="bg-[#779341] hover:bg-[#3A5408] text-white font-bold py-4 px-4 rounded-full btn-add-contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListContacts;
