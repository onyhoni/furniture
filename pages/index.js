import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@Components/Components/Container";
import Navbar from "@Components/Components/Navbar";
import HeroSection from "@Components/Components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`w-full h-screen bg-[url('/Hero.png')] object-cover ${inter.className}`}>
            <Container>
                <Navbar />
                <HeroSection />
            </Container>
        </main>
    );
}
