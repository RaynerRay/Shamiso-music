import Hero from "@/components/frontend/Hero";
import Image from "next/image";
import LogoGrid from '@/components/frontend/LogoGrid';
import FeaturedSongs from "@/components/frontend/FeaturedSongs";
import CallToAction from "@/components/frontend/CallToAction";
import About from "@/components/frontend/About";

export default function Home() {
  return (
    <main className="">
        <Hero />
        <LogoGrid />
        <About />
        <FeaturedSongs />
        <CallToAction />
    </main>
  );
}
