import Parallax from "../animated/Parallax";

export default function ShowReelVideo() {
  return (
    <>
      <Parallax
        speed={400}
        className="lg:hidden px-4 -mt-8 sm:px-0 sm:mt-0 z-10 relative"
      >
        <video
          src="/videos/showreel.mp4"
          autoPlay
          className="w-full rounded-3xl sm:rounded-none"
          muted
          loop
        />
      </Parallax>
      <div className="hidden lg:block px-4 -mt-8 sm:px-0 sm:mt-0 z-10 relative">
        <video
          src="/videos/showreel.mp4"
          autoPlay
          className="w-full rounded-3xl sm:rounded-none"
          muted
          loop
        />
      </div>
    </>
  );
}
