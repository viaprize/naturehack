import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  return (
    <main
      className={`flex min-h-screen relative flex-col items-center justify-between p-24`}
    >
      <h1 className="text-white text-[30px] z-[12] font-[600]">
        Speak to them all
      </h1>
      <div className="fixed inset-0 w-full h-full">
        <div className="bg-black w-full h-full absolute z-[6] opacity-10" />
        <video
          className="absolute inset-0 w-full h-full z-[5] object-cover"
          src="https://taraliver.b-cdn.net/Tara%20River.mp4"
          title="Your video title"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <iframe
        className="z-[11] opacity-80 rounded-md"
        src="https://retune.so/chat/11ede806-4a71-7230-9305-879bdfff47c7/widget?key=11edbf75-310a-4970-a236-45941de73e77"
        width="550"
        height="700"
      />
      <div className="flex flex-col text-center z-[12] font-[600] text-white gap-5 mt-20">
        <h1>
          {`We're creating AI chat bots to educate and rebuild
          relationships with more-than-human beings, for nature
          conservation and restoration. By combining live data and the
          latest research, we aim to monitor and redirect value
          towards nature stewardship.`}
        </h1>
        <h1>
          This is a demo.
          <br />
          For more information please write <br />{" "}
          jasmine@speaksentient.com
        </h1>
      </div>
    </main>
  );
}
