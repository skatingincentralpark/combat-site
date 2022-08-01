import client from "../../client";
import Carousel from "../components/carousel";

type LookbookType = {
  lookbooks: {
    album: {
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
    }[];
    _id: string;
  }[];
};

const Lookbook = ({ lookbooks }: LookbookType) => {
  // console.log(lookbooks);
  // const SLIDE_COUNT = lookbooks[0].album.length;
  // const slides = Array.from(Array(SLIDE_COUNT).keys());

  return <Carousel lookbook={lookbooks[0]} />;
};

export default Lookbook;

export async function getStaticProps() {
  const lookbooks = await client.fetch(`
    *[_type == "lookbook"]{
      _id, album[]{
        caption,
        asset -> {
        url, 
        metadata{
        "height": dimensions.height,
        "width": dimensions.width,
        "aspectRatio": dimensions.aspectRatio,
        lqip, 
        palette
          }
        }
      }
    }
  `);

  return {
    props: {
      lookbooks,
    },
  };
}
