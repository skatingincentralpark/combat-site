import styled from "@emotion/styled";
import { PortableText } from "@portabletext/react";

type LookbookDescriptionProps = {
  title: string;
  season: string;
  date: string;
  description: [];
};

export const LookbookDescription = ({
  title,
  season,
  date,
  description,
}: LookbookDescriptionProps) => {
  return (
    <FlexRow>
      <div>
        {title}
        <br />
        {season} {date}
      </div>
      <div>
        <PortableText value={description} />
      </div>
    </FlexRow>
  );
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 var(--gap-xs);
  min-height: 7rem;

  & > div:nth-of-type(2) {
    text-align: right;
  }
`;
