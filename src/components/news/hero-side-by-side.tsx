import styled from "@emotion/styled";
import { clamp } from "@lib/helpers";

const HeroSideBySide = () => {
  return (
    <PageHero>
      <HeroText>
        <h1>MASHA POPOVA IS FINDING VELOCITY</h1>
        <h2>
          Real Talk with the Ukrainian Designer About Her First Runway Show,
          Inspiration, and the Industry
        </h2>
        <small>
          Interview: Rebecca Storm
          <br />
          Photography: Rebecca Storm, Yaroslav Prytula
        </small>
      </HeroText>
      <HeroImage
        // src="https://japan-photo.info/wp-content/uploads/2008/04/KAWAUCHI-Utatane_044-685.jpg"
        src="https://a.1stdibscdn.com/rinko-kawauchi-1972-japanese-photography-untitled-from-the-series-of-hanabi-rinko-kawauchi-sky-firework-night-for-sale/a_12801/a_58919321584524511679/Christophe_Guye_Galerie_Rinko_Kawauchi_HANABI_H31_master.jpg?width=1500"
      />
    </PageHero>
  );
};

export default HeroSideBySide;

const PageHero = styled.section`
  margin-top: var(--header-height);
  position: relative;

  @media screen and (min-width: 700px) {
    display: flex;
  }
`;

const HeroText = styled.div`
  padding-top: var(--gap-l);
  padding-left: var(--gap-xl);
  padding-right: var(--gap-xl);
  color: #333333;

  h1 {
    font-size: 10rem;
    font-size: ${clamp(50, 120)};
    line-height: 1.1em;
    letter-spacing: -0.02em;
    font-weight: 300;
  }

  h2 {
    font-size: 3rem;
    font-size: ${clamp(24, 36)};
    line-height: 1.4em;
    letter-spacing: -0.02em;
    margin-bottom: 0.6em;
  }

  small {
    display: inline-block;
    line-height: 1.4em;
  }

  @media screen and (min-width: 700px) {
    /* width: 50%; */
  }
`;

const HeroImage = styled.img`
  padding-top: var(--gap-m);
  right: 0;
  object-fit: cover;
  object-position: left;

  @media screen and (min-width: 700px) {
    padding-top: 0;
    margin-left: auto;
    min-width: 0;
    /* width: 50%; */
  }
`;
