import React from "react";
import { Icons } from "../../assets/icons";

const Header = () => {
  return (
    <header className="py-6 bg-title-white">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-[143px] h-[42px]">
            <Icons.MultiLevelIcon className="w-full h-full object-contain" />
          </div>
          <div className="gap-x-[42px] flex items-center justify-between">
            <a
              href="#!"
              className="text-title-color hover:text-primary font-Inter text-base font-normal leading-[19px]"
            >
              Bosh sahifa
            </a>
            <a
              href="#!"
              className="text-title-color hover:text-primary font-Inter text-base font-normal leading-[19px]"
            >
              Testlar
            </a>
            <a
              href="#!"
              className="text-title-color hover:text-primary font-Inter text-base font-normal leading-[19px]"
            >
              Biz haqimizda
            </a>
            <a
              href="#!"
              className="text-title-color hover:text-primary font-Inter text-base font-normal leading-[19px]"
            >
              Bog’lanish
            </a>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="flex items-center gap-x-6">
              <div className="flex items-center gap-x-1">
                <span className="text-title-color font-Inter text-base font-medium leading-[19px]">
                  Uz
                </span>
                <Icons.ArrowIcon />
              </div>
              <p className="text-title-gray font-Inter text-base font-normal leading-[19px]">
                |
              </p>
              <p className="text-title-color font-Inter text-base font-normal leading-[19px]">
                Kirish
              </p>
            </div>
            <button
              type="button"
              className="bg-primary text-title-white font-Inter text-base font-medium leading-[19px] rounded-[12px] py-[16.5px] px-6"
            >
              Ro’yhatdan o’tish
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
