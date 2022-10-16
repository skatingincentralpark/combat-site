import styled from "@emotion/styled";
import { clamp } from "@lib/helpers";

const HeroSideBySideOverlap = () => {
  return (
    <>
      <PageHero>
        {/* <Before /> */}
        <HeroText>
          <h1>
            RIDING OUT WITH THE LA BIKE LIFE CREW AND CLARKS ORIGINALS FW22
          </h1>
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
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2020%2F08%2Fbornxraised-wacko-maria-collaborative-capsule-2020-info-9.jpg?q=75&w=800&cbr=1&fit=max"
        />
      </PageHero>
    </>
  );
};

export default HeroSideBySideOverlap;

const Before = styled.div`
  aspect-ratio: 1;
  width: 50%;
  outline: 5px solid green;
  position: relative;
`;
const PageHero = styled.section`
  margin-top: var(--header-height);
  position: relative;
  height: fit-content;

  @media screen and (min-width: 700px) {
    display: flex;
  }
`;

const HeroText = styled.div`
  padding: var(--gap-l) var(--gap-xl) 0 var(--gap-xl);
  width: 100%;

  h1 {
    font-size: ${clamp(34, 80)};
    line-height: 1.1em;
    letter-spacing: -0.02em;
    width: ${clamp(400, 850, 800, 1400)};
    margin-bottom: 0.6em;
  }

  h2 {
    font-size: ${clamp(24, 36)};
    line-height: 1.4em;
    letter-spacing: -0.02em;
    margin-bottom: 0.7em;
  }

  small {
  }

  @media screen and (min-width: 700px) {
    position: relative;
    width: 50%;
  }
`;

const HeroImage = styled.img`
  padding-top: var(--gap-m);
  right: 0;
  width: 100%;

  @media screen and (min-width: 700px) {
    padding-top: 0;
    position: static;
    width: 50%;
    height: fit-content;
    /* aspect-ratio: 1; */
  }
`;
