import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="text-white flex py-11 items-center">
            <div className="w-3/12">
                <h1 className="font-bold text-xl font-syne">Furniture</h1>
            </div>
            <div className="w-6/12 flex justify-center">
                <ul className="flex space-x-11 text-white/50 items-center">
                    <li className="text-white font-medium">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="">
                        <Link href="/">Furniture</Link>
                    </li>
                    <li className="">
                        <Link href="/">Accessories</Link>
                    </li>
                    <li className="">
                        <Link href="/">About us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
