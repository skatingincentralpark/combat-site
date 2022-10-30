import styled from "@emotion/styled";
import { m } from "framer-motion";
import FutureImage from "next/future/image";

const Lightbox = ({
  image,
  onClick,
}: {
  image: ImageType;
  onClick: () => void;
}) => {
  if (!image) return null;
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.3, ease: [0.04, 0.62, 0.93, 0.98] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: [0.04, 0.62, 0.93, 0.98] },
    },
  };

  return (
    <LightboxStyled onClick={onClick} {...variants}>
      <FutureImageStyled
        src={image.url}
        alt={image.caption}
        width={image.width}
        height={image.height}
      />
    </LightboxStyled>
  );
};

export default Lightbox;

const LightboxStyled = styled(m.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  backdrop-filter: blur(10px);
  background-color: white;
  padding: var(--gap-m);

  img {
    margin: auto;
    object-fit: contain;
    user-select: none;
  }
`;
const FutureImageStyled = styled(FutureImage)`
  height: 100%;
  object-fit: cover;
`;
