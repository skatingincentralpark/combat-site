import NewsItem from "../../components/news-item";
import client from "../../../client";
import { StyledPageWrapper } from "../../components/shared-styles/styled-page-wrapper";

type NewsItemType = {
  title: string;
  author: string;
  body: [];
  description: [];
  category: string;
  date: string;
  slug: string;
  location: {
    lat: number;
    lng: number;
  };
  image: {
    aspectRatio: number;
    height: number;
    lqip: string;
    palette: {};
    width: number;
    url: string;
    caption: string;
  };
};

type Props = {
  newsItems: [NewsItemType];
};

const NewsPage = ({ newsItems }: Props) => {
  return (
    <StyledPageWrapper px="l">
      {newsItems.map((newsItem, i) => (
        <NewsItem newsItem={newsItem} key={i} />
      ))}
    </StyledPageWrapper>
  );
};

export async function getStaticProps() {
  const newsItems = await client.fetch(`
    *[_type == "newsItem"] {
      "author": author -> name,
      body,
      date,
      description,
      body,
      "category": category -> title,
      location { lat, lng },
      "slug": slug.current,
      title,
      image {
        caption,
        "url": asset -> url,
        "height": asset -> metadata.dimensions.height,
        "width": asset -> metadata.dimensions.width,
        "aspectRatio": asset -> metadata.dimensions.aspectRatio,
        "lqip": asset -> metadata.lqip,
        "palette": asset -> metadata.palette
      }
    }
  `);

  return {
    props: {
      newsItems,
    },
  };
}

export default NewsPage;
