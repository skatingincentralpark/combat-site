export interface NewsItemType {
  title: string;
  subtitle: string;
  slug: string;
  excerpt: [];
  location: { lat: number; lng: number };
  credits: { author: string; role: string }[];
  category: string;
  date: string;
  previewImages: ImageType[];
}
export type HeroLayoutType = "row" | "column";
export interface HeroMediaType {
  type: string;
  image: ImageType;
  video: VideoType;
}
/** The properties needed to render actual article slug page */
export interface NewsItemArticle extends NewsItemType {
  heroLayout: HeroLayoutType;
  heroMedia: HeroMediaType;
  heroTextStyles: {
    headline: HeroTextOptions;
    subheadline: HeroTextOptions;
    credits: HeroTextOptions;
  };
  body: [];
}

/** Config options for hero headline, subheadline and credits */
export interface HeroTextOptions {
  fontSize: "small" | "medium" | "large";
  fontWeight?: "light" | "regular" | "bold";
  width?: 30 | 40 | 50 | 60 | 70 | 100;
  textAlign?: "left" | "right" | "center";
  containerAlign?: "left" | "right" | "center";
}
