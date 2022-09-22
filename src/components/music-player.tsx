import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const MusicPlayer = () => {
  // Audio Player
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);

  const play = () => {
    ref.current?.play();
    setIsPlaying(true);
  };
  const pause = () => {
    ref.current?.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (!isPlaying || !ref.current) return;
    const audio = ref.current;
    audio.volume = 0;

    const fadeInAudio = setInterval(() => {
      if (audio.volume >= 0.8) clearInterval(fadeInAudio);
      audio.volume += 0.09;
    }, 200);
  }, [isPlaying]);

  return (
    <MusicPlayerWrapper>
      <MusicPlayerInner>
        <audio id="audio" src="/audio/emerald.mp3" ref={ref} />
        {!isPlaying ? (
          <button onClick={play} id="playPauseBtn">
            Play
          </button>
        ) : (
          <button onClick={pause} id="playPauseBtn">
            Pause
          </button>
        )}
        <small>......</small>
      </MusicPlayerInner>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;

const MusicPlayerWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 9999;
  width: 300px;
  opacity: 1;
  font-family: "Courier New", Courier, monospace;
`;

const MusicPlayerInner = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  display: flex;

  & > button {
    background-color: rgb(175, 175, 175);
    font-family: "Courier New", Courier, monospace;
    border: none;
    margin-right: 1em;
    font-size: 1rem;
    padding: 0 var(--gap-xxs);
  }
`;
