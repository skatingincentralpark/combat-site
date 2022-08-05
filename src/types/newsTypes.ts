export type NewsItemType = {
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
