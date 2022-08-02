import NewsItem from "../../components/news-item";
import client from "../../../client";
import { StyledPageWrapper } from "../../components/shared-styles/styled-page-wrapper";

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
