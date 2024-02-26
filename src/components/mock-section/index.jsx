import React from "react";
import MockCard from "../mock-card";
import { Icons } from "../../assets/icons";
import { MockData } from "../../data";

const MockSection = ({ title }) => {
  return (
    <div className="bg-title-white w-full rounded-[20px] p-8 mt-[42px]">
      <h1 className="font-Inter text-[24px] font-semibold leading-[29px]">
        {title}
      </h1>
      <div className="flex gap-x-[20px] mt-8">
        {MockData.map((el) => (
          <MockCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default MockSection;
