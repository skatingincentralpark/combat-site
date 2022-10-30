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
/**
 * Extended with extra fields used on the article page
 */
export type HeroLayoutType = "row" | "column";
export interface NewsItemArticle extends NewsItemType {
  heroLayout: HeroLayoutType;
  heroMedia: HeroMediaType;
  body: [];
  heroTextStyles: {
    headline: HeadlineOptions;
    subheadline: SubheadlineOptions;
    credits: CreditsOptions;
  };
}
export interface HeroMediaType {
  type: string;
  image: ImageType;
  video: VideoType;
}
export interface HeadlineOptions {
  fontSize: "small" | "medium" | "large";
  fontWeight?: "light" | "regular" | "bold";
  width?: 30 | 40 | 50 | 60 | 70 | 100;
  textAlign?: "left" | "right" | "center";
  containerAlign?: "left" | "right" | "center";
}
export interface SubheadlineOptions {
  fontSize: "small" | "medium" | "large";
  fontWeight?: "light" | "regular" | "bold";
  width?: 30 | 40 | 50 | 60 | 70 | 100;
  textAlign?: "left" | "right" | "center";
  containerAlign?: "left" | "right" | "center";
}
export interface CreditsOptions {
  fontSize?: "small" | "medium" | "large";
  fontWeight?: "light" | "regular" | "bold";
  width?: 30 | 40 | 50 | 60 | 70 | 100;
  textAlign?: "left" | "right" | "center";
  containerAlign?: "left" | "right" | "center";
}
