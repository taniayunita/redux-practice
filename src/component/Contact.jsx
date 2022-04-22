import React from "react";
import faker from "@faker-js/faker";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
