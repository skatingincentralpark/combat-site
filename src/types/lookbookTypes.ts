export type LookbookType = {
  lookbook: {
    _id: string;
    season: string;
    date: string;
    description: [];
    title: string;
    album: {
      aspectRatio: number;
      height: number;
      lqip: string;
      palette: {};
      width: number;
      url: string;
      caption: string;
    }[];
  };
};
