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

type ImageType = {
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
