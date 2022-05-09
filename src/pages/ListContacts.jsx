import React from "react";
import ButtonAdd from "../component/ButtonAdd";
import Contact from "../component/Contact";
import { Link } from "react-router-dom";
import "../pages/contacts/index.css";
import {
  useGetAllContactQuery,
  useGetContactByIdQuery,
  useGetContactByLimitQuery,
  useDeleteContactMutation,
  useCreateContactMutation
} from "../redux/api/contactsApi";

const ListContacts = () => {
  const responseContactApi = useGetAllContactQuery();
  const responseIdContactApi = useGetContactByIdQuery(2);
  const responseContactByLimit = useGetContactByLimitQuery(4);
  const responseDelete = useDeleteContactMutation()
  console.log("responseContactApi>>>", responseContactApi);
  console.log("isLoading>>>", responseContactApi.isLoading);
  console.log("responseData>>>", responseContactApi.data);
  console.log("isSuccess>>>", responseContactApi.isSuccess);
  console.log("responseIdContactApi>>>", responseIdContactApi);
  console.log("responseIdContactLimit>>>", responseContactByLimit);


  if (responseContactApi.isLoading)
    return (
      <div className="flex justify-center items-center font-bold pt-[30vh]">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  if (responseContactApi.error)
    return <div>Oops.. there is an error {responseContactApi.error.error}</div>;

  return (
    <div id="form-contact">
      <div className="container max-w-md mx-auto pt-10">
        <div className="max-w-md h-[90vh] rounded-[2rem] mx-auto overflow-hidden shadow-lg bg-white pl-3">
          <p className="text-3xl pb-5 pt-3 pl-3 font-bold">Contacts</p>
          {responseContactApi.data.length > 0 ? (
            responseContactApi.data.map((contact, index) => (
              <div key={index}>
                <Contact
                  nama={contact.name}
                  number={contact.number}
                  email={contact.email}
                />
              </div>
            ))
          ) : (
            <p className="pl-3">anda tidak memiliki contact...</p>
          )}
          <Link to="/add-contact">
            <ButtonAdd />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListContacts;
