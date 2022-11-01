import { useState, useRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

/*
 * This component returns a container, with a video and two buttons absolutely positioned in it
 * It handles play/pause and mute/unmute
 * The buttons have some simple styles that indicate
 */

interface Props {
  asset: VideoType;
  containerStyles?: CssProperties;
  buttonStyles?: CssProperties;
}

const Video = ({ asset, containerStyles, buttonStyles }: Props) => {
  const { url, height = 1, width = 1, caption, alt, autoplay } = asset;

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
    <VideoContainer
      containerStyles={containerStyles}
      css={css`
        aspect-ratio: ${width} / ${height};
      `}
    >
      <VideoButtons buttonStyles={buttonStyles} isPlaying={isPlaying}>
        <button onClick={handlePlayVideo}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={handleMuteVideo}>{isMuted ? "Mute" : "Unmute"}</button>
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
  );
};

export default Video;

const VideoContainer = styled.div<{ containerStyles: CssProperties }>`
  position: relative;
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
  }

  ${({ containerStyles }) => containerStyles}
  background-color: red;
`;

const VideoButtons = styled.div<{
  buttonStyles: CssProperties;
  isPlaying: boolean;
}>`
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
