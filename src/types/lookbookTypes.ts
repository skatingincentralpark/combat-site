export type LookbookType = {
  lookbook: {
    _id: string;
    slug: string;
    slugsAll: string[];
    season: string;
    date: string;
    description: [];
    title: string;
    album: {
      aspectRatio: number;
      height: number;
      lqip: string;
      palette: {
        dominant: {
          background: string;
        };
      };
      width: number;
      url: string;
      caption: string;
    }[];
  };
};
