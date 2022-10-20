import styled from "@emotion/styled";
import { clamp } from "@lib/helpers";
import HeroHeadlineSwitcher from "./hero-headline-switcher";

const HeroSideBySideOverlap = () => {
  return (
    <>
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
          <h2>
            Dirt Bikes and Quads are the Vehicles of Choice for this
            Intergenerational Group of Riders
          </h2>
          <small>
            Interview: Rebecca Storm
            <br />
            Photography: Rebecca Storm, Yaroslav Prytula
          </small>
        </HeroText>
        <HeroImage
          //   src="https://japan-photo.info/wp-content/uploads/2008/04/KAWAUCHI-Utatane_044-685.jpg"
          // src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F08%2Fbornxraised-wacko-maria-collaborative-capsule-2020-info-9.jpg?q=75&w=800&cbr=1&fit=max"
          // src="/images/tomaskii.png"
          // src="https://www.nuanhoart.com/static/8d5129e8eb040641fa8fb3f3537435c0/4423a/Nurse.jpg"
          src="https://www.theartstory.org/blog/wp-content/uploads/2015/05/Gustav_Klimt_016-1024x1024.jpg"
        />
      </PageHero>
    </>
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

  h1 {
    font-weight: 400;
    line-height: 1.1em;
    letter-spacing: -0.02em;
    width: 100%;
    margin-bottom: 0.6em;

    @media screen and (min-width: 700px) {
      width: 65%;
    }
  }

  h2 {
    font-size: ${clamp(24, 36)};
    line-height: 1.4em;
    letter-spacing: -0.02em;
    width: 100%;
    margin-bottom: 0.7em;

    @media screen and (min-width: 700px) {
      width: 30%;
    }
  }

  small {
  }
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
