import NewsItem from "../../components/news-item";
import { StyledPageWrapper } from "../../components/shared-styles/styled-page-wrapper";
import image1 from "../../../public/images/aphex.jpeg";
import image2 from "../../../public/images/kayo.jpeg";
import image3 from "../../../public/images/thom.jpeg";

const news = [
  {
    title: "Spring Song / Recondo",
    location: "Sydney",
    description:
      "From the essays of Emerson, to the stories of the Beat, these vanguards of individualism, freedom and improvisation give us comfort and confidence to work towards these values - the values which we believe are key to living a fulfilling life.  We are moved firstly by the lessons written, and finally, from the atmosphere created by their words.  Recondo is a repository of  ideas expressed through strong technical foundations in design and well made goods.  At its core, Recondo constructs end-to-end experiences through garments, site design, and visual - auditory media.",
    date: "17.sep 2022",
    image: image1,
  },
  {
    title: "Spring Song / Recondo",
    location: "Sydney",
    description:
      "From the essays of Emerson, to the stories of the Beat, these vanguards of individualism, freedom and improvisation give us comfort and confidence to work towards these values - the values which we believe are key to living a fulfilling life.  We are moved firstly by the lessons written, and finally, from the atmosphere created by their words.  Recondo is a repository of  ideas expressed through strong technical foundations in design and well made goods.  At its core, Recondo constructs end-to-end experiences through garments, site design, and visual - auditory media.",
    date: "17.sep 2022",
    image: image2,
  },
  {
    title: "Spring Song / Recondo",
    location: "Sydney",
    description:
      "From the essays of Emerson, to the stories of the Beat, these vanguards of individualism, freedom and improvisation give us comfort and confidence to work towards these values - the values which we believe are key to living a fulfilling life.  We are moved firstly by the lessons written, and finally, from the atmosphere created by their words.  Recondo is a repository of  ideas expressed through strong technical foundations in design and well made goods.  At its core, Recondo constructs end-to-end experiences through garments, site design, and visual - auditory media.",
    date: "17.sep 2022",
    image: image3,
  },
];

const NewsPage = () => {
  return (
    <StyledPageWrapper px="l">
      {news.map((item, i) => (
        <NewsItem newsItem={item} key={i} />
      ))}
    </StyledPageWrapper>
  );
};

export default NewsPage;
