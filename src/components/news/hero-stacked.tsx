import styled from "@emotion/styled";
import { clamp } from "@lib/helpers";

const HeroStacked = () => {
  return (
    <PageHero>
      <HeroText>
        <h1>MUNA WILL MAKE IT OKAY</h1>
        <h2>Take a Break with the Band that Knows You Need One</h2>
        <small>
          Interview: Rebecca Storm
          <br />
          Photography: Rebecca Storm, Yaroslav Prytula
        </small>
      </HeroText>
      <HeroImage src="https://api.time.com/wp-content/uploads/2013/04/shiga-05992.jpg" />
    </PageHero>
  );
};

export default HeroStacked;

const PageHero = styled.section`
  margin-top: var(--header-height);
  position: relative;
  text-align: center;
`;

const HeroText = styled.div`
  padding-top: var(--gap-l);
  padding-left: var(--gap-xl);
  padding-right: var(--gap-xl);
  width: 100%;
  color: #333333;

  h1 {
    font-size: 10rem;
    font-size: ${clamp(50, 100)};
    line-height: 1.1em;
    letter-spacing: -0.02em;
    font-weight: 400;
  }

  h2 {
    font-size: 3rem;
    font-size: ${clamp(24, 46)};
    line-height: 1.4em;
    letter-spacing: -0.02em;
    margin-bottom: 0.6em;
  }

  small {
    display: inline-block;
    line-height: 1.4em;
  }
`;

const HeroImage = styled.img`
  padding: var(--gap-xl) var(--gap-xl) 0 var(--gap-xl);
  margin: auto;
  right: 0;
  object-fit: cover;
  object-position: left;
  width: 100%;
  max-width: 80rem;
`;
