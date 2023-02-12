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
  url: string;
  height: number;
  width: number;
  aspectRatio: number | Property.AspectRatio;
  asset?: AssetType;
  lqip?: string;
  blurHash?: string;
  dominantColor?: string;
}
interface VideoType {
  url: string;
  alt: string;
  autoplay: boolean;
  caption: string;
  height?: number;
  width?: number;
}
type CssProperties = Interpolation<React.CSSProperties>;
