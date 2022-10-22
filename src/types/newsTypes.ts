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
  heroImage: ImageType;
  body: [];
  heroTextStyles: [];
}
