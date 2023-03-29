import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const MusicPlayerNew = () => {
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

  return (
    <>
      <RecordWrapper isPlaying={isPlaying}>
        <Squares isPlaying={isPlaying} />
      </RecordWrapper>
      <MusicPlayerWrapper onClick={!isPlaying ? play : pause}>
        <audio id="audio" src="/audio/the-highways.mp3" ref={ref} />
        <button id="playPauseBtn">{!isPlaying ? <Play /> : <Pause />}</button>
      </MusicPlayerWrapper>
    </>
  );
};

export default MusicPlayerNew;

const MusicPlayerWrapper = styled.div`
  font-family: var(--font-mono);
  -webkit-font-smoothing: initial;
  height: 100%;
  aspect-ratio: 1 / 1;
  background: var(--piss-1);
  transition: transform 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const RecordWrapper = styled.div<{ isPlaying: boolean }>`
  font-family: var(--font-mono);
  -webkit-font-smoothing: initial;
  height: 100%;
  aspect-ratio: 1 / 1;
  transition: transform 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  background-color: white;
  border-radius: 10px;
`;

const Pause = () => (
  <svg
    width="11"
    height="13"
    viewBox="0 0 11 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="13"
      width="3"
      height="13"
      transform="rotate(180 3 13)"
      fill="black"
    />
    <rect
      x="11"
      y="13"
      width="3"
      height="13"
      transform="rotate(180 11 13)"
      fill="black"
    />
  </svg>
);

const Play = () => (
  <svg
    width="11"
    height="13"
    viewBox="0 0 11 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 6.5L1.10858e-06 12.9953L9.53674e-07 0.00488294L11 6.5Z"
      fill="black"
    />
  </svg>
);

const Squares = ({ isPlaying }: { isPlaying: boolean }) => {
  const [pathData, setPathData] = useState([
    { width: "6.42", height: "6.42" },
    { y: "16.04", width: "6.42", height: "6.42" },
    { y: "32.07", width: "6.42", height: "6.42" },
    { y: "48.11", width: "6.42", height: "6.42" },
    { x: "16.04", width: "6.42", height: "6.42" },
    { x: "16.04", y: "16.04", width: "6.42", height: "6.42" },
    { x: "16.04", y: "32.07", width: "6.42", height: "6.42" },
    { x: "16.04", y: "48.11", width: "6.42", height: "6.42" },
    { x: "32.07", width: "6.42", height: "6.42" },
    { x: "32.07", y: "16.04", width: "6.42", height: "6.42" },
    { x: "32.07", y: "32.07", width: "6.42", height: "6.42" },
    { x: "32.07", y: "48.11", width: "6.42", height: "6.42" },
    { x: "48.11", width: "6.42", height: "6.42" },
    { x: "48.11", y: "16.04", width: "6.42", height: "6.42" },
    { x: "48.11", y: "32.07", width: "6.42", height: "6.42" },
    { x: "48.11", y: "48.11", width: "6.42", height: "6.42" },
  ]);

  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 54.53 54.53"
    >
      <g>
        {pathData.map((x, i) => (
          <Rect
            className="cls-1"
            width={x.width}
            height={x.height}
            x={x.x}
            y={x.y}
            key={`sq-${i}`}
            style={{
              ["--delay" as any]: i,
              animationPlayState: isPlaying ? `running` : `paused`,
            }}
          />
        ))}
      </g>
    </svg>
  );
};

const Rect = styled.rect<{ fast?: boolean }>`
  fill: #000;
  animation: ${({ fast }) =>
    fast ? `FairyBreadBiatch2 infinite` : `FairyBreadBiatch infinite`};
  animation-duration: ${({ fast }) => (fast ? `1000ms` : `1000ms`)};
  animation-delay: calc(var(--delay) * 0.1s);

  @keyframes FairyBreadBiatch {
    0% {
      fill: #000;
    }
    15% {
      fill: gray;
    }
    25% {
      fill: darkgray;
    }
    50% {
      fill: #000;
    }
    75% {
      fill: var(--piss-1);
    }
    100% {
      fill: var(--green-1);
    }
  }

  @keyframes FairyBreadBiatch2 {
    0% {
      fill: white;
    }
    15% {
      fill: #3d315b;
    }
    25% {
      fill: red;
    }
    50% {
      fill: #212c23;
    }
    75% {
      fill: #2e3923;
    }
    100% {
      fill: #2e2f23;
    }
  }
`;
