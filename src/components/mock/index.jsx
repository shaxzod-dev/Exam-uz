import React from "react";
import MockSection from "../mock-section";

const Mock = () => {
  return (
    <section className="pt-[42px] pb-[71px] bg-title-gray">
      <div className="container">
        <h1 className="font-Inter text-[34px] font-semibold leading-[41px] text-title-color">
          Mock - Ielts
        </h1>
        <MockSection title={"IELTS - Mock test 1"} />
        <MockSection title={"IELTS - Mock test 2"} />
      </div>
    </section>
  );
};

export default Mock;
