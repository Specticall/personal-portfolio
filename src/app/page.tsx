import Navbar from "@/components/general/Navbar";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Narrative from "@/components/home/Narrative";
import Services from "@/components/home/Services";
import ShowReelVideo from "@/components/home/ShowReelVideo";
import Work from "@/components/home/Work";
import ReactLenis from "lenis/react";

export default function Page() {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.5, wheelMultiplier: 1.35 }}
    >
      <div className="">
        <Navbar />
        <Hero />
        <ShowReelVideo />
        <Narrative />
        <Services />
        <Work />
        <Footer />
      </div>
    </ReactLenis>
  );
}
