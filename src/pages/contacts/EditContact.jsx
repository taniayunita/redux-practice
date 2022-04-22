import React from "react";
import "./index.css";

const EditContact = () => {
  return (
    <div id="add-contact">
      <div className="container max-w-md mx-auto pt-10">
        <div>
          <div className="max-w-md rounded-[2rem] mx-auto overflow-hidden shadow-lg bg-white">
            <div className="px-8 pt-9">
              <p className="font-bold text-[2rem] mb-2">Edit Contact</p>
            </div>
            <form className="px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded-[9px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="nick name or full name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded-[9px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="email address"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="numberphone"
                >
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded-[9px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="numberphone"
                  type="number"
                  placeholder="phone number"
                />
              </div>
              <div className="flex items-center justify-between pt-4">
                <button
                  className="bg-[#E8E8E8] border-1 border-red w-[180px] hover:bg-[#BFBABA] text-[#779341] rounded-[10px] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="bg-[#779341] w-[180px] hover:bg-[#3A5408] text-white font-bold py-2 px-4 rounded-[10px] focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
