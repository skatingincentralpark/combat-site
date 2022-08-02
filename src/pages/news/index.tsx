import NewsItem from "../../components/news-item";
import client from "../../../client";
import { StyledPageWrapper } from "../../components/shared-styles/styled-page-wrapper";

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

type NewsItem = {
  author: {};
  body: [];
  description: [];
  category: {};
  date: string;
  image: {
    asset: {
      metadata: {
        aspectRatio: number;
        height: number;
        lqip: string;
        palette: {};
        width: number;
      };
      url: string;
    };
    caption: string;
  };
  location: {
    lat: number;
    lng: number;
  };
  slug: {};
  title: string;
};

type Props = {
  newsItems: [NewsItem];
};

const NewsPage = ({ newsItems }: Props) => {
  return (
    <StyledPageWrapper px="l">
      {newsItems.map((item, i) => (
        <NewsItem newsItem={item} key={i} />
      ))}
    </StyledPageWrapper>
  );
};

export async function getStaticProps() {
  const newsItems = await client.fetch(`
    *[_type == "newsItem"] {
      author -> { name },
      body,
      date,
      description,
      body,
      category -> { title },
      image {
        caption,
        asset -> {
          url,
          metadata {
            "height": dimensions.height,
            "width": dimensions.width,
            "aspectRatio": dimensions.aspectRatio,
            lqip,
            palette
          },
        },
      },
      location { lat, lng },
      slug { current },
      title
    }
  `);

  return {
    props: {
      newsItems,
    },
  };
}

export default NewsPage;
