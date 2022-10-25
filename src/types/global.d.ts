// TO-DO: Remove when Next provides this type by default, research why it's not working

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

declare module "*.gif" {
  const content: StaticImageData;
  export default content;
}

interface ImageType {
  aspectRatio: number;
  height: number;
  lqip: string;
  dominantColor: string;
  width: number;
  url: string;
  caption: string;
}
interface VideoType {
  url: string;
  height?: number;
  width?: number;
  caption: string;
  alt: string;
  autoplay: boolean;
}
