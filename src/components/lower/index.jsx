import React from "react";

const Lower = () => {
  return (
    <footer className="border-top py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[42px]">
            <p className="font-Inter text-title-color text-base font-medium leading-[19px]">
              Copyright © 2024
            </p>
            <p className="font-Inter text-title-color text-base font-medium leading-[19px]">
              Malumot uchun: +998 90 123 45 67
            </p>
          </div>
          <p className="font-Inter text-title-color text-base font-medium leading-[19px]">
            Sayt ishlab chiqaruvchisi: @username
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Lower;
