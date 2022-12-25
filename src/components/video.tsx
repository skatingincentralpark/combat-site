import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import useOnScreen from "@hooks/useOnScreen";

/*
 * This component has:
 *  Lazy Loading: detects when it's in view via intersection observer - changes the src to video and ref.current.load()
 *  canPlay: uses canPlay to switch dominantColor for video and allow for handlePlayVideo usage
 */

interface Props {
  asset: VideoType;
  containerStyles?: CssProperties;
  buttonStyles?: CssProperties;
  defaultOnScreen?: boolean;
  controls?: boolean;
}

const Video = ({
  asset,
  containerStyles,
  buttonStyles,
  defaultOnScreen = false,
  controls = true,
}: Props) => {
  const { url, height = 1, width = 1, caption, alt, autoplay } = asset;

  const ref = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(ref.current?.muted || false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [canPlay, setCanPlay] = useState<boolean>(false);

  const onScreen = useOnScreen(ref);
  const isOnScreen = defaultOnScreen || onScreen;

  // when intersecting, load the video
  useEffect(() => {
    if (isOnScreen && ref.current) ref.current?.load();
  }, [ref.current]);

  const handlePlayVideo = () => {
    if (!canPlay) return;
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
      <DominantColor canPlay={canPlay} />
      {controls && (
        <VideoButtons
          buttonStyles={buttonStyles}
          isPlaying={isPlaying}
          canPlay={canPlay}
        >
          <button onClick={handlePlayVideo}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={handleMuteVideo}>
            {isMuted ? "Mute" : "Unmute"}
          </button>
        </VideoButtons>
      )}
      <StyledVideo
        autoPlay={autoplay || true}
        playsInline
        muted
        loop
        ref={ref}
        onClick={handlePlayVideo}
        canPlay={canPlay}
        onCanPlay={() => setCanPlay(true)}
      >
        <source src={isOnScreen ? url : ""} />
        <meta itemProp="description" content={alt} />
      </StyledVideo>
    </VideoContainer>
  );
};

export default Video;

const VideoContainer = styled.div<{ containerStyles: CssProperties }>`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 2rem;

  ${({ containerStyles }) => containerStyles}
`;
const StyledVideo = styled.video<{ canPlay: boolean }>`
  opacity: ${({ canPlay }) => (canPlay ? 1 : 0)};
  transition: opacity 0.25s linear;
  width: 100%;
  height: 100%;
`;
const VideoButtons = styled.div<{
  buttonStyles: CssProperties;
  isPlaying: boolean;
  canPlay: boolean;
}>`
  position: absolute;
  z-index: 2;
  cursor: pointer;

  button {
    padding: var(--gap-m);
    color: white;
    opacity: ${({ canPlay }) => (canPlay ? 1 : 0)};
    font-weight: 400;
    font-family: var(--font-mono);
    transition: background 200ms, opacity 200ms, transform 200ms;

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

    &:active {
      transform: scale(0.95);
    }
  }

  ${({ buttonStyles }) => buttonStyles}
`;
const DominantColor = styled.div<{
  canPlay: boolean;
}>`
  opacity: ${({ canPlay }) => (canPlay ? 0 : 1)};
  transition: opacity 500ms linear 0s;
  border-radius: 2rem;
  position: absolute;
  inset: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: var(--piss-1);
  pointer-events: none;
`;
