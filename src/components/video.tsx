import { useState, useRef } from "react";
import styled, { Interpolation } from "@emotion/styled";

/*
 * This component returns a container, with a video and two buttons absolutely positioned in it
 * It handles play/pause and mute/unmute
 * The buttons have some simple styles that indicate
 */

interface VideoProps {
  containerStyles?: Interpolation<React.CSSProperties>;
}
interface ButtonProps {
  buttonStyles?: Interpolation<React.CSSProperties>;
}
interface Props extends VideoProps, ButtonProps {
  asset: VideoType;
}

const Video = ({ asset, containerStyles, buttonStyles }: Props) => {
  const { url, height, width, caption, alt, autoplay } = asset;

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
      <VideoContainer containerStyles={containerStyles}>
        <VideoButtons buttonStyles={buttonStyles} isPlaying={isPlaying}>
          <button onClick={handlePlayVideo}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={handleMuteVideo}>
            {isMuted ? "Mute" : "Unmute"}
          </button>
        </VideoButtons>
        <video
          autoPlay={autoplay || true}
          playsInline
          muted
          loop
          ref={ref}
          onClick={handlePlayVideo}
        >
          <source src={url} />
          <meta itemProp="description" content={alt} />
        </video>
      </VideoContainer>
    </>
  );
};

export default Video;

const VideoContainer = styled.div<VideoProps>`
  position: relative;
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
  }

  ${({ containerStyles }) => containerStyles}
`;

interface ButtonPropsExtended extends ButtonProps {
  isPlaying: boolean;
}

const VideoButtons = styled.div<ButtonPropsExtended>`
  position: absolute;
  z-index: 1;

  button {
    padding: var(--gap-m);
    color: white;
    font-weight: 400;
    font-family: "Bitcount Mono Single Bk Circle", "Courier New", Courier,
      monospace;

    &:first-of-type {
      background-color: ${({ isPlaying }) =>
        !isPlaying ? `var(--yellow-2)` : `initial`};
      color: ${({ isPlaying }) => (!isPlaying ? `#000` : `#fff`)};
    }

    &:hover {
      @media screen and (min-width: 700px) {
        background-color: red;
        color: #fff;
      }
    }
  }

  ${({ buttonStyles }) => buttonStyles}
`;
