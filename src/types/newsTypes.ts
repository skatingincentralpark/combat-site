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
  image: ImageType;
};
