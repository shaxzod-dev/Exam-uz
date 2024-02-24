import React from "react";
import { Icons } from "../../assets/icons";

const MockCard = ({ img, title, precent, color }) => {
  return (
    <div className="p-8 flex flex-col bg-[rgb(251,252,255)]">
      <div className="bg-primary rounded-[14px] w-[62px] h-[62px]">{img}</div>
      <h2 className="text-title-color font-Inter text-[22px] font-semibold leading-7 py-5">
        {title}
      </h2>
      <div className="flex items-center gap-x-3">
        <p className="text-[rgba(0,42,84,0.75)] font-Inter text-xs font-semibold leading-[15px]">
          {precent}
        </p>
        <span className="w-[157px] h-2 rounded-[14px] bg-primary"></span>
      </div>
      <div className="flex mt-8 py-4 px-6 items-center gap-x-2 border-[2px] rounded-[12px] justify-center border-[rgb(0,42,84)]">
        <button
          type="button"
          className="font-Inter text-sm font-medium leading-[17px]"
        >
          Boshlash
        </button>
        <div className="w-3 h-3">
          <Icons.ArrowRightIcon className="object-contain w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default MockCard;
