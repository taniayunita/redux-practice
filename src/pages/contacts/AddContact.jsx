import React from "react";
import FormContact from "../../component/FormContact";
import "./index.css";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <div id="form-contact">
      <FormContact titlePage="Add Contact">
        <Link to="/">
          <button
            className="bg-[#E8E8E8] border-1 border-red w-[180px] hover:bg-[#BFBABA] text-[#779341] rounded-[10px] font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Cancel
          </button>
        </Link>
        <button
          className="bg-[#779341] w-[180px] hover:bg-[#3A5408] text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
          type="button"
        >
          Add contact
        </button>
      </FormContact>
    </div>
  );
};

export default AddContact;
