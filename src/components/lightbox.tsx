import styled from "@emotion/styled";
import Image from "./image";

/*
 * This should fade in with dominantColored background
 */

const Lightbox = ({
  image,
  onClick,
}: {
  image: ImageType;
  onClick: () => void;
}) => {
  if (!image) return null;

  return (
    <LightboxStyled onClick={onClick}>
      <Image image={image} />
    </LightboxStyled>
  );
};

export default Lightbox;

const LightboxStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background-color: white;
  padding: var(--gap-m);
  display: flex;

  img {
    margin: auto;
    height: 100%;
    user-select: none;
    object-fit: contain;
  }
`;
