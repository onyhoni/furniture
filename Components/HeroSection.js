import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { BsCheckLg, BsSearch } from 'react-icons/bs';

export default function HeroSection() {
    return (
        <section className="text-white flex  mb-56">
            <div className="w-3/12">
                <h1 className="text-white/50 max-w-xs text-lg">
                    Having a home you love means having furnishing that you’re
                    proud of. We are proud to bring you trendy furniture for
                    every room in the house, with the added bonus.
                </h1>
                <h3 className="pt-6 text-[#D2FFAF] font-medium text-2xl flex items-center gap-5">
                    Read More{' '}
                    <span>
                        <FaLongArrowAltRight />
                    </span>
                </h3>
                <div className="bg-[#F1F1F1] h-16 w-40 rounded-full mt-64 ml-20 flex space-x-3 justify-center items-center">
                    <span className="w-9 h-9 rounded-full border-white border-2 bg-black flex items-center justify-center">
                        <BsCheckLg size={20} />
                    </span>
                    <span className="w-9 h-9 rounded-full border-white border-2 bg-[#6CD6C3] flex"></span>
                    <span className="w-9 h-9 rounded-full border-white border-2 bg-[#F68129] flex"></span>
                </div>
            </div>
            <div className="w-6/12">
                <div className="text-white flex justify-center mb-10 items-center gap-4">
                    <BsSearch size={20} />
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
            <div className="w-3/12 text-white">
                <h3 className="font-bold text-4xl font-syne mb-20 ml-32">
                    Featured
                </h3>

                <div className="w-56 h-60 bg-gradient-to-t from-white/25 to-white/50 flex items-end rounded-r-3xl ml-32 relative shadow-white shadow-sm mb-14 cursor-pointer">
                    <img
                        className="absolute -top-5 -left-5"
                        src="/featured1.png"
                    />
                    <div className="p-5">
                        <p className="font-medium text-xl mb-2">Black Sofa</p>
                        <p className="font-medium text-4xl">$250</p>
                    </div>
                </div>
                <div className="w-56 h-60 bg-gradient-to-t from-white/25 to-white/50 flex items-end rounded-r-3xl ml-32 relative shadow-white shadow-sm cursor-pointer mb-12">
                    <img
                        className="absolute -top-5 -left-5"
                        src="/featured2.png"
                    />
                    <div className="p-5">
                        <p className="font-medium text-xl mb-2">Black Chair</p>
                        <p className="font-medium text-4xl">$100</p>
                    </div>
                </div>
                <button className="font-semibold text-3xl px-6 bg-black/50 py-5 rounded-xl ml-32 hover:bg-black/80">
                    More Product
                </button>
            </div>
        </section>
    );
}
