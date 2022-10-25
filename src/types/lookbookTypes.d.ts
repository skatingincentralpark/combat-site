export type LookbookType = {
  lookbook: {
    _id: string;
    slug: string;
    slugsAll: string[];
    season: string;
    date: string;
    description: [];
    title: string;
    album: ImageType[];
  };
};
