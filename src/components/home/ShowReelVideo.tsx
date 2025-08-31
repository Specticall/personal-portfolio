export default function ShowReelVideo() {
  return (
    <div className="px-4 -mt-8 sm:px-0 sm:mt-0 ">
      <video
        src="/videos/showreel.mp4"
        autoPlay
        className="w-full rounded-3xl sm:rounded-none"
        muted
        loop
      />
    </div>
  );
}
