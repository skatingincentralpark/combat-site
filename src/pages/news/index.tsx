import NewsItem from "../../components/news-item";
import client from "../../../client";
import { StyledPageWrapper } from "../../components/shared-styles/page-wrappers";
import { NewsItemType } from "../../types/newsTypes";

const NewsPage = ({ newsItems }: { newsItems: NewsItemType[] }) => {
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
