import React from "react";
import "./index.css";
import FormContact from "../../component/FormContact";
import { Link } from "react-router-dom";

const EditContact = () => {
  return (
    <div id="form-contact">
      <FormContact titlePage="Edit Contact">
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
          Save
        </button>
      </FormContact>
    </div>
  );
};

export default EditContact;
