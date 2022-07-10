import styled from "@emotion/styled";
import NewsItem from "../components/news-item";

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
      {news.map((item, i) => (
        <NewsItem newsItem={item} key={i} />
      ))}
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--gap-page-top) var(--gap-l);
`;

export default NewsPage;
