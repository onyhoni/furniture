import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section className="text-white">
            <div className="w-4/12 pl-40">
                <h1 className="text-white/50 max-w-xs text-lg">
                    Having a home you love means having furnishing that you’re
                    proud of. We are proud to bring you trendy furniture for
                    every room in the house, with the added bonus.
                </h1>
                <h3 className="pt-6 text-[#D2FFAF] font-medium text-xl flex items-center gap-5">
                    Read More{" "}
                    <span>
                        <FaLongArrowAltRight />
                    </span>
                </h3>
            </div>
        </section>
    );
}
