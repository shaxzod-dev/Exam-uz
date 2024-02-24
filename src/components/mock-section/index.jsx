import React from "react";
import MockCard from "../mock-card";
import { Icons } from "../../assets/icons";

const MockSection = ({ title }) => {
  return (
    <div className="bg-title-white w-full rounded-[20px] p-8 mt-[42px]">
      <h1 className="font-Inter text-[24px] font-semibold leading-[29px]">
        {title}
      </h1>
      <div className="flex gap-x-[20px] mt-8">
        <MockCard
          precent={"100%"}
          title={"Listening"}
          img={<Icons.Listening />}
          color={"succes"}
        />
        <MockCard
          color={"semi-succes"}
          precent={"65%"}
          title={"Reading"}
          img={<Icons.Reading />}
        />
        <MockCard
          color={"fail"}
          precent={"10%"}
          title={"Speaking"}
          img={<Icons.Speaking />}
        />
        <MockCard
          color={"semi-succes"}
          precent={"65%"}
          title={"Writing"}
          img={<Icons.Writing />}
        />
      </div>
    </div>
  );
};

export default MockSection;
