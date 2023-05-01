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
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        src="/sentient_video.mp4"
      ></video>
      <iframe
        className="z-[11] opacity-80 rounded-md"
        src="https://retune.so/chat/11ede806-4a71-7230-9305-879bdfff47c7/widget?key=11edbf75-310a-4970-a236-45941de73e77"
        width="550"
        height="700"
      />
    </main>
  );
}
