import Image from 'next/image';
import { Inter } from 'next/font/google';
import Container from '@Components/Components/Container';
import Navbar from '@Components/Components/Navbar';
import HeroSection from '@Components/Components/HeroSection';
import WhySection from '@Components/Components/WhySection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main
            className={`w-full h-[1348px] bg-[url('/Hero.png')] object-cover ${inter.className}`}
        >
            <Container>
                <Navbar />
                <HeroSection />
                <WhySection />
            </Container>
        </main>
    );
}
