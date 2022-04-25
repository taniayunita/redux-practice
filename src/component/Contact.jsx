import React from "react";
import faker from "@faker-js/faker";
import DropdownMenu from "./DropdownMenu";

const Contact = (props) => {
  return (
    <>
      <div className="bg-grey-500 max-w-sm py-4 rounded-[10px]">
        <div className="flex items-center justify-between">
          <div>
            <div className=" flex item-center text-sm">
              <img
                className="w-13 h-16 rounded-full mr-4 ml-2"
                src={faker.image.avatar()}
              />

              <div className="text-sm">
                <p className="text-black leading-none text-lg font-bold">
                  {props.nama}
                </p>
                <p className="text-gray-900 pt-1">{props.email}</p>
                <p className="text-gray-900">{props.number}</p>
              </div>
            </div>
          </div>
          <div className="order-last">
            <DropdownMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
