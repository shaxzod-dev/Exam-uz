import React from "react";
import MockSection from "../mock-section";
import { MockSectionData } from "../../data";

const Mock = () => {
  
  return (
    <section className="pt-[42px] pb-[71px] bg-title-gray">
      <div className="container">
        <h1 className="font-Inter text-[34px] font-semibold leading-[41px] text-title-color">
          Mock - Ielts
        </h1>
        {MockSectionData.map((el) => (
          <MockSection key={el.id} {...el} />
        ))}
      </div>
    </section>
  );
};

export default Mock;
