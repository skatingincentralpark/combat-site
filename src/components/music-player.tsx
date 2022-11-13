import { useRef, useState } from "react";
import styled from "@emotion/styled";
import FutureImage from "next/image";
import popupImage from "../../public/images/picasso.jpeg";
import { AnimatePresence, m } from "framer-motion";

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

  // useEffect(() => {
  //   if (!isPlaying || !ref.current) return;
  //   const audio = ref.current;
  //   audio.volume = 0;

  //   const fadeInAudio = setInterval(() => {
  //     if (audio.volume >= 0.8) clearInterval(fadeInAudio);
  //     audio.volume += 0.2;
  //   }, 200);
  // }, [isPlaying]);

  const [wordIndex, setWordIndex] = useState(0);

  const sentence =
    "Combat was a French newspaper created during the Second World War. It was founded in 1941 as a clandestine newspaper of the French Resistance.".split(
      " "
    );

  const click = () => {
    const atEnd = wordIndex === sentence.length;
    setWordIndex((x) => (!atEnd ? (x += 1) : 0));
  };

  return (
    <MusicPlayerWrapper>
      <MusicPlayerInner>
        <audio id="audio" src="/audio/the-highways.mp3" ref={ref} />
        <button onClick={!isPlaying ? play : pause} id="playPauseBtn">
          {!isPlaying ? "Play" : "Pause"}
        </button>
        <div onClick={click}>
          {sentence[wordIndex]} {`////////////`}
        </div>
        <AnimatePresence>
          {wordIndex !== 0 && wordIndex % 4 == 0 && (
            <ImageWrapper
              initial={{ opacity: 0, y: `100%`, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: `100%`,
                scale: 0,
                transition: { duration: 0.5, ease: `easeInOut` },
              }}
            >
              <FutureImage
                src={popupImage}
                alt="Drawing of a skeleton"
                priority={true}
              />
            </ImageWrapper>
          )}
        </AnimatePresence>
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
  font-family: var(--font-mono);
  -webkit-font-smoothing: initial;
`;

const MusicPlayerInner = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  display: flex;
  padding-right: var(--gap-xxs);
  background-color: white;
  border: 1px solid var(--gray-2);
  min-width: 20rem;

  &:active {
    color: red;
    border-color: magenta;

    & > button {
      background-color: magenta;
      transition: background-color 0ms;
    }
  }

  & > div {
    padding-top: 0.2rem;
    user-select: none;
    width: 100%;
  }

  & > button {
    cursor: crosshair;
    background-color: var(--gray-2);
    border: none;
    margin-right: 1em;
    font-size: 1rem;
    padding: 0 var(--gap-xxs);
    padding-top: 0.2rem;
    transition: background-color 500ms;
  }
`;

const ImageWrapper = styled(m.div)`
  position: absolute;
  bottom: 0;
  z-index: -1;

  & > img {
    object-fit: contain;
    height: fit-content;
  }
`;
