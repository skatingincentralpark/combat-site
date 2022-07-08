import { default as NextImage } from "next/image";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";

const news = [
  {
    title: "Spring Song / Recondo",
    location: "Sydney",
    description:
      "From the essays of Emerson, to the stories of the Beat, these vanguards of individualism, freedom and improvisation give us comfort and confidence to work towards these values - the values which we believe are key to living a fulfilling life.  We are moved firstly by the lessons written, and finally, from the atmosphere created by their words.  Recondo is a repository of  ideas expressed through strong technical foundations in design and well made goods.  At its core, Recondo constructs end-to-end experiences through garments, site design, and visual - auditory media.",
    date: "17.sep 2022",
    image: "/images/aphex.jpeg",
  },
  {
    title: "Spring Song / Recondo",
    location: "Sydney",
    description:
      "From the essays of Emerson, to the stories of the Beat, these vanguards of individualism, freedom and improvisation give us comfort and confidence to work towards these values - the values which we believe are key to living a fulfilling life.  We are moved firstly by the lessons written, and finally, from the atmosphere created by their words.  Recondo is a repository of  ideas expressed through strong technical foundations in design and well made goods.  At its core, Recondo constructs end-to-end experiences through garments, site design, and visual - auditory media.",
    date: "17.sep 2022",
    image: "/images/kayo.jpeg",
  },
  {
    title: "Spring Song / Recondo",
    location: "Sydney",
    description:
      "From the essays of Emerson, to the stories of the Beat, these vanguards of individualism, freedom and improvisation give us comfort and confidence to work towards these values - the values which we believe are key to living a fulfilling life.  We are moved firstly by the lessons written, and finally, from the atmosphere created by their words.  Recondo is a repository of  ideas expressed through strong technical foundations in design and well made goods.  At its core, Recondo constructs end-to-end experiences through garments, site design, and visual - auditory media.",
    date: "17.sep 2022",
    image: "/images/thom.jpeg",
  },
];

const NewsPage = () => {
  return (
    <PageWrapper>
      {news.map((n, i) => (
        <NewsItemWrapper key={i}>
          <NewsItemImageWrapper
            animate={{
              scale: [1, 0.96, 1, 1, 1],
              borderColor: ["#bfffea", "#b3ff6b", "#fffa67", "#C3C48D"],
              borderWidth: ["10px", "30px", "5px", "0px"],
              opacity: ["0%", "100%", "100%", "100%"],
              y: [100, 0, 0, 0, 0],
              borderRadius: ["0rem", "25rem", "2.5rem", "2rem", "2rem"],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.9, 1],
              repeatDelay: 5,
            }}
          >
            <NextImage
              src={n.image}
              alt="Something"
              layout="fill"
              objectFit="cover"
            />
          </NewsItemImageWrapper>
          <NewsItemTextWrapper>
            <NewsItemDate>{n.date}</NewsItemDate>
            <div>
              <NewsItemTitle>
                <div>{n.title}</div>
                <div>{n.location}</div>
              </NewsItemTitle>
              <NewsItemDescription>{n.description}</NewsItemDescription>
            </div>
          </NewsItemTextWrapper>
        </NewsItemWrapper>
      ))}
    </PageWrapper>
  );
};

const PageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: var(--gap-page-top) var(--gap-l);

  @media screen and (min-width: 650px) {
    /* display: flex; */
  }
`;
const NewsItemWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--gap-xxl);

  @media screen and (min-width: 650px) {
    flex-direction: row;
  }
`;
const NewsItemImageWrapper = styled(motion.div)`
  margin-bottom: var(--gap-xl);
  border: 1px solid #c3c48d;
  aspect-ratio: 2 / 3;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 20rem;
  flex-shrink: 0;
  transition: aspect-ratio 1s, width 1s, aspect-ratio 1s;

  @media screen and (min-width: 650px) {
    margin-right: var(--gap-xl);
    aspect-ratio: 1 / 1;
  }
`;
const NewsItemTextWrapper = styled.div`
  & > * {
    margin-bottom: var(--gap-l);
  }

  @media screen and (min-width: 650px) {
    display: flex;
    flex-direction: row;
    max-width: 50rem;
  }
`;
const NewsItemDate = styled.div`
  font-weight: 400;
  flex-shrink: 0;

  @media screen and (min-width: 650px) {
    margin-right: var(--gap-xxl);
  }
`;
const NewsItemTitle = styled.div`
  font-weight: 400;
  margin-bottom: var(--gap-l);
`;
const NewsItemDescription = styled.div``;

export default NewsPage;
