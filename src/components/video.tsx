import { useState, useRef } from "react";

const Video = ({ src }: { src: string }) => {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(ref.current?.muted || false);
  const [isPlaying, setIsPlaying] = useState<boolean>(
    ref.current?.paused || true
  );

  const handlePlayVideo = () => {
    if (ref.current?.paused) {
      ref.current?.play();
      setIsPlaying(true);
    } else {
      ref.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteVideo = () => {
    if (!ref.current) return;
    ref.current.muted = !ref.current.muted;
    setIsMuted(!ref.current.muted);
  };

  return (
    <>
      <button onClick={handlePlayVideo}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handleMuteVideo}>{isMuted ? "Mute" : "Unmute"}</button>
      <video autoPlay playsInline muted loop ref={ref}>
        <source src={src} />
      </video>
    </>
  );
};

export default Video;
