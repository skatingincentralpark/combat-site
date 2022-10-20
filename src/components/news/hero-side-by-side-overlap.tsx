import styled from "@emotion/styled";
import { clamp } from "@lib/helpers";
import HeroHeadlineSwitcher from "./hero-headline-switcher";
import HeroSubheadlineSwitcher from "./hero-subheadline-switcher";

const HeroSideBySideOverlap = () => {
  return (
    <PageHero>
      <HeroText>
        <HeroHeadlineSwitcher
          fontSize="small"
          fontWeight="light"
          width={60}
          textAlign="left"
          containerAlign="left"
        >
          RIDING OUT WITH
          <br />
          THE LA BIKE LIFE CREW
          <br />
          AND CLARKS ORIGINALS FW22
        </HeroHeadlineSwitcher>
        <HeroSubheadlineSwitcher
          fontSize="small"
          fontWeight="light"
          width={50}
          textAlign="left"
          containerAlign="left"
        >
          Dirt Bikes and Quads are the Vehicles of Choice for this
          Intergenerational Group of Riders
        </HeroSubheadlineSwitcher>
        <small>
          Interview: Rebecca Storm
          <br />
          Photography: Rebecca Storm, Yaroslav Prytula
        </small>
      </HeroText>
      <HeroImage src="https://www.theartstory.org/blog/wp-content/uploads/2015/05/Gustav_Klimt_016-1024x1024.jpg" />
    </PageHero>
  );
};

export default HeroSideBySideOverlap;

const PageHero = styled.section`
  margin-top: var(--header-height);
  position: relative;
  height: fit-content;
  /* min-height: calc(1 * 50vw); */
  width: 100%;
  min-height: calc(1 * 50vw);

  @media screen and (min-width: 700px) {
    display: flex;
  }
`;

const HeroText = styled.div`
  padding: var(--gap-l) var(--gap-xl) 0 var(--gap-xl);
  width: 100%;

  /* h2 {
    font-size: ${clamp(24, 36)};
    line-height: 1.4em;
    letter-spacing: -0.02em;
    width: 100%;
    margin-bottom: 0.7em;

    @media screen and (min-width: 700px) {
      width: 30%;
    }
  } */
`;

const HeroImage = styled.img`
  padding-top: var(--gap-m);
  right: 0;
  width: 100%;

  @media screen and (min-width: 700px) {
    padding-top: 0;
    position: absolute;
    z-index: -1;
    width: 50%;
    height: fit-content;
  }
`;
