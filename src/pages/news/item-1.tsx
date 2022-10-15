import styled from "@emotion/styled";
import { clamp } from "@lib/helpers";

const NewsItemPage = () => {
  return (
    <div style={{ height: `100%` }}>
      <PageHero>
        <HeroText>
          <h1>MASHA POPOVA IS FINDING VELOCITY</h1>
          <h2>
            Real Talk with the Ukrainian Designer About Her First Runway Show,
            Inspiration, and the Industry
          </h2>
          <small>
            Interview: Rebecca Storm Photography: Rebecca Storm, Yaroslav
            Prytula
          </small>
        </HeroText>
        <HeroImage src="https://japan-photo.info/wp-content/uploads/2008/04/KAWAUCHI-Utatane_044-685.jpg" />
      </PageHero>
      <SoundcloudWrapper>
        <div />
        <iframe
          style={{ padding: `2rem 2rem 0 2rem` }}
          width="100%"
          height="166"
          scrolling="no"
          frameBorder="no"
          // allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/852891706&color=%2384d0e0&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </SoundcloudWrapper>
      <IntroText>
        <p>
          Theories suggest that recurring dreams are related to an unresolved
          challenge in one’s life—a tension, a conflict, or a desire. I am
          asking Masha Popova about her dreams. “I don’t really remember my
          dreams. Sometimes I remember falling, because that’s when I always
          wake up,” she says. “But sometimes I start running, sort of fast, and
          then I jump in the air and I’m flying. I remember running, flying, and
          falling.”
        </p>
      </IntroText>
      <BodyText>
        <p>
          It is almost irrelevant to ask someone who is living one of their
          dreams what they experience while asleep, but her answer conveniently
          amplifies the ethos behind her latest SS23 collection. Popova explains
          to me the attempt to create a body of work that allegorically emulates
          the feeling of an adrenaline rush. “That was a starting point for me,”
          she explains. “I just wanted to feel like I was moving fast, to forget
          about everything and play loud music, to be able to feel like nothing
          else matters.” Running, flying, and falling.
        </p>
        <p>
          Born in Odessa, Ukraine, in 1991, Popova set out to study
          architecture, working in tandem with her studies, though unfulfilled
          by the monotonous nature of the survey work. She applied to Central
          Saint Martins and moved to London, ultimately interning with Phoebe
          Philo at Celine, and then at Maison Margiela. When we first speak,
          it’s over video call, three days out from her first-ever runway show.
          Her fashion career runs a similar trajectory to other CSM
          alumni—interning for prestigious luxury brands following the
          completion of a master’s degree, and being thrown head-first into an
          industry that’s largely inhospitable of the realities many emerging
          designers face: working alone or with a small team at best; humble;
          ambitious; broke. She is one of several emerging designers whose work
          reflects the no longer so subtle dialectical relationship between
          fashion and “real life”—with supply chain issues, war, a tanking
          economy, a normalized global health crisis, along with the pressures
          of staying afloat creatively and financially while newly in the
          spotlight, there is often little reason, or option, to avoid
          mitigating these tensions through their work. “My work is personal, so
          it is political,” she says.
        </p>
      </BodyText>
      <ArticleGroupImages>
        <img
          src="https://imageobjecttext.files.wordpress.com/2012/09/kawauchi-illuminance-2-2009.jpg"
          alt="rinko"
        />
        <img
          src="https://i.guim.co.uk/img/media/99f2c2081e9ad8bbf10f576891b02c2ee70d297f/0_189_5760_3456/master/5760.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=80fd54e204968d90a800c84d7c78d809"
          alt="rinko"
        />
      </ArticleGroupImages>
      <BodyText>
        <p>
          <strong>
            Your work has been described as Y2K—how do you feel about that?
          </strong>
          <br />I guess it’s because of the butterfly thing. Butterflies really
          pegged me to that. Mostly because it was a thing of the 2000s, which
          has come back in style, so people were looking for clothing of that
          era. And with the ‘90s trend too, you could definitely find ‘90s in my
          work as well. I think it’s because I grew up in the 2000s; I was a
          teenager at that time, so I was learning how to communicate with the
          world through fashion by exploring a Y2K aesthetic. It’s just
          something that&apos;s naturally getting attached to our generation of
          designers. Like a learned fashion language through experience.
          Whenever I&apos;m speaking I will have this accent—I&apos;m speaking
          English, but I definitely have my Eastern European accent. Fashion
          language is the same, unconsciously. I never intentionally set out to
          create 2000s looks. This new collection for me feels a little bit
          costume, and that just naturally happened.
        </p>
      </BodyText>
    </div>
  );
};

export default NewsItemPage;

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
  width: 100%;

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
  }

  small {
    display: inline-block;
    margin-top: 2rem;
  }

  @media screen and (min-width: 700px) {
    position: sticky;
    z-index: 1;
    width: ${clamp(250, 700, 700, 1400)};
  }
`;

const HeroImage = styled.img`
  padding-top: var(--gap-m);
  right: 0;
  object-fit: cover;
  object-position: left;
  width: 100%;

  @media screen and (min-width: 700px) {
    padding-top: 0;
    position: sticky;
    margin-left: auto;
    width: ${clamp(500, 700)};
    height: 100%;
  }
`;

const IntroText = styled.div`
  width: 70%;
  margin-top: var(--gap-3xl);
  padding-left: var(--gap-xl);

  p {
    font-size: ${clamp(18, 25)};
    line-height: 1.3em;
    letter-spacing: -0.02em;
  }
`;

const BodyText = styled.div`
  padding: var(--gap-xl);

  p,
  strong {
    font-size: ${clamp(14, 18)};
    line-height: 1.5em;
    max-width: 40em;
    margin: var(--gap-l) auto;
  }

  strong {
    margin-left: var(--gap-l);
  }
`;

const ArticleGroupImages = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 0 var(--gap-m);

  & > * {
    object-fit: contain;
    min-width: 0;
    padding: 0 var(--gap-m);
  }
`;

const SoundcloudWrapper = styled.div`
  margin-top: 1rem;
  position: relative;

  & > div {
    position: absolute;
    background-color: #7b007b;
    mix-blend-mode: difference;
    width: 100%;
    height: 100%;
  }

  &:hover > div {
    display: none;
  }
`;
