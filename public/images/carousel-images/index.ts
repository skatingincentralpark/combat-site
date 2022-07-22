import media1 from "./R0002070.jpg";
import media2 from "./R0002633.jpg";
import media3 from "./R0002128.jpg";
import media4 from "./R0002180.jpg";
import media5 from "./R0002219.jpg";
import media6 from "./R0002387.jpg";
import media7 from "./R0002632.jpg";
import media8 from "./R0002418.jpg";
import media9 from "./R0002425.jpg";
import media10 from "./R0002901.jpg";

// How is importing picture different from just using src string?

export const media = [
  media1,
  media2,
  media3,
  media4,
  media5,
  media6,
  media7,
  media8,
  media9,
  media10,
];
export const mediaByIndex = (index: number) => {
  console.log(media[index % media.length]);
  return media[index % media.length];
};
