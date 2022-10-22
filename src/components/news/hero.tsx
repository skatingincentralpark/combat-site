import styled from "@emotion/styled";

/*
 * Hero:
 *  Conists of text and image with options to change how they're laid out
 */

interface HeroOptions {
  layout?: "block" | "flex";
}

interface Props extends HeroOptions {
  children: React.ReactNode;
}

const Hero = ({ children }: Props) => {
  return <PageHero>{children}</PageHero>;
};

export default Hero;

const PageHero = styled.section<HeroOptions>`
  margin-top: var(--header-height);
  position: relative;
  height: fit-content;
  /* min-height: calc(1 * 50vw); // should use image aspect ratio (inversed? * whatever the image width is) */
  width: 100%;
  min-height: calc(1 * 50vw);

  @media screen and (min-width: 700px) {
    display: flex;
    display: ${({ layout }) => layout || "flex"};
  }
`;
