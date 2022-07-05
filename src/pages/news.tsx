import { default as NextImage } from "next/image";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "../components/image";

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
              scale: [1, 0.8, 0.8, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["20%", "50%", "50%", "50%", "0"],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
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

  outline: 2px solid black;
  aspect-ratio: 2 / 3;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 20rem;
  min-width: 12rem;

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
    margin-right: var(--gap-xl);
  }
`;
const NewsItemTitle = styled.div`
  font-weight: 400;
  margin-bottom: var(--gap-l);
`;
const NewsItemDescription = styled.div``;

export default NewsPage;