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

interface AssetType {
  _ref: string;
  _type: string;
}
interface ImageType {
  caption: string;
  asset?: AssetType;
  url: string;
  height: number;
  width: number;
  aspectRatio: number;
  lqip?: string;
  blurHash?: string;
  dominantColor?: string;
}
interface VideoType {
  url: string;
  height?: number;
  width?: number;
  caption: string;
  alt: string;
  autoplay: boolean;
}
type CssProperties = Interpolation<React.CSSProperties>;
