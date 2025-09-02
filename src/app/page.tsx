import AnimatedCounter from "@/components/animated/AnimatedCounter";
import AnimatedIncrementingCounter from "@/components/animated/AnimatedIncrementingCounter";
import Navbar from "@/components/general/Navbar";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero/Hero";
import Narrative from "@/components/home/Narrative";
import Services from "@/components/home/Services";
import ShowReelVideo from "@/components/home/ShowReelVideo";
import Work from "@/components/home/Work";
import Preloader from "@/components/preloader/Preloader";
import ReactLenis from "lenis/react";

export default function Page() {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.5, wheelMultiplier: 1.1 }}
    >
      <div className="">
        <Preloader />
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
