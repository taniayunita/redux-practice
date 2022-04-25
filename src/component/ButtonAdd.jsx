import React from 'react'

const ButtonAdd = () => {
  return (
    <div>
        <button className="bg-[#779341] hover:bg-[#3A5408] text-white font-bold py-4 px-4 rounded-full btn-add-contact" style={{zIndex: '1000', display: 'inline-block', position: 'fixed', bottom: '8%', right: '35%'}}>
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
  )
}

export default ButtonAdd