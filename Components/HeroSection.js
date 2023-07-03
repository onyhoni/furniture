import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsSearch } from 'react-icons/bs';

export default function HeroSection() {
  return (
    <section className="text-white flex">
      <div className="w-3/12">
        <h1 className="text-white/50 max-w-xs text-lg">
          Having a home you love means having furnishing that you’re proud of.
          We are proud to bring you trendy furniture for every room in the
          house, with the added bonus.
        </h1>
        <h3 className="pt-6 text-[#D2FFAF] font-medium text-xl flex items-center gap-5">
          Read More{" "}
          <span>
            <FaLongArrowAltRight />
          </span>
        </h3>
      </div>
      <div className="w-6/12">
        <div className="text-white flex justify-center mb-10 items-center gap-4">
        <BsSearch size={20}/>
          <input
            type="text"
            placeholder="Seacrh"
            className="bg-white/0 focus-visible:outline-none border-b py-2.5 px-2 w-80 "
          />
        </div>
        <div className="flex justify-center pb-10">
         <h1 className="text-[88px] max-w-xl text-center font-syne leading-none">
            Make a room comfortable & elegant
          </h1>
        </div>

      </div>
      <div className="w-3/12 text-white flex items-center flex-col relative">
          <h3 className="font-bold text-4xl font-syne mb-20">Featured</h3>
          <div className="">
              <img class="" src="/featured1.png" />
              <div className=" bg-white/30 absolute h-64 top-0 right-0 w-64">
                  <p>Black Sofa</p>
                  <p>$250</p>
              </div>
          </div>
      </div>
    </section>
  );
}
