import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function WhySection() {
    return (
        <div className="flex">
            <div className="w-1/2 text-black flex flex-col justify-center">
                <h1 className="font-bold font-syne text-6xl mb-16">
                    Why <br />
                    choosing us
                </h1>
                <p className="text-[#242424]/70 text-xl max-w-lg mb-16">
                    Having a home you love means having furnishing that you’re
                    proud of. We are proud to bring you trendy furniture for
                    every room in the house, with the added bonus.
                </p>
                <h3 className="text-[#556652] flex items-center gap-4 font-medium text-2xl cursor-pointer hover:font-bold">
                    Read More
                    <FaLongArrowAltRight />
                </h3>
            </div>
            <div className="w-1/2">
                <img className="" src="/Hero2.png" />
            </div>
        </div>
    );
}
