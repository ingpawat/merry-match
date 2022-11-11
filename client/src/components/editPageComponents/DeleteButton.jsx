import React from "react";
import { useRef } from "react";
import useClickOutside from "../../utils/hooks/useClickOutside";

function DeleteButton({ close }) {

  

  return (
    <div className="DeleteButton w-[33rem] h-[12.5rem] bg-white rounded-[24px] flex flex-col z-30 absolute mt-[50%]">
      <div className="flex flex-row space-x-[45%]">
        <h1 className="text-[1.25rem] m-[5%] fon  t-[600]">
          Delete Confirmation
        </h1>
        <button
          className="text-[1.8rem] text-[#C8CCDB]"
          onClick={() => close(false)}
        >
          x
        </button>
      </div>
      <p className="text-[1rem] m-[5%] mt-[0] font-[400] text-[#646D89]">
        Do you sure to delete account?
      </p>
      <div className="w-[100%] h-[auto] ml-[5%] flex justify-start space-x-[5%]">
        <button className="w-[12rem] h-[3rem] text-[1rem] bg-[#FFE1EA] rounded-[99px] lending-[150%] text-[#95002B] font-[700]">
          Yes, I want to delete
        </button>
        <button 
        className="w-[7.813rem] h-[3rem] text-[1rem] bg-[#C70039] rounded-[99px] lending-[150%] text-[white] font-[700]"
        onClick={() => close(false)}>
          No, I don’t
        </button>
      </div>
    </div>
  );
}

export default DeleteButton;
