import { useRouter } from "next/router";
import client from "../../../client";
import HeadSEO from "@components/head-seo";
import styled from "@emotion/styled";
import { slugToText } from "@lib/helpers";

type Props = {
  slugs: string[];
};

const Index = ({ slugs }: Props) => {
  const arr = slugs.map((x, i) => {
    return {
      slug: x,
      date: 2021 + i,
      color: i === 0 ? `#ff579f` : `#bbdfc5`,
    };
  });

  const dummyArr = [...Array(30 - slugs.length)];

  const router = useRouter();

  return (
    <PageWrapper>
      <HeadSEO title="Lookbooks" />
      <LookbookList>
        {arr.map((item, i) => (
          <ListItem key={item.slug} borderColor={item.color}>
            <button onClick={() => router.push(`lookbooks/${item.slug}`)}>
              <span>{`0${i}`}</span>
              <span>{slugToText(item.slug)}</span>
              <span>{item.date}</span>
            </button>
          </ListItem>
        ))}

        {dummyArr.map((_, i) => (
          <DummyListItem key={i}>
            <button>
              <span />
              <span>null</span>
              <span>null</span>
            </button>
          </DummyListItem>
        ))}
      </LookbookList>
    </PageWrapper>
  );
};

export default Index;

const PageWrapper = styled.div`
  padding-top: var(--gap-page-top);
  max-height: 100%;
  overflow: hidden;
`;

const LookbookList = styled.ul`
  padding: 0;

  & > li {
    & > button {
      display: block;
      padding: var(--gap-3xs) var(--gap-l);
      font-weight: 600;
      font-size: 14px;
      width: 100%;

      display: grid;
      grid-template-columns: 2rem minmax(10rem, 30rem) 3fr;
      grid-gap: var(--gap-s);
      text-align: left;

      & > span:nth-last-of-type(2) {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  & > li:first-of-type {
    border-top: 0.5px solid var(--gray-4);
  }
`;

const ListItem = styled.li<{ borderColor: string }>`
  border-bottom: 0.5px solid var(--gray-4);
  list-style: none;
  border-left: 0.8rem solid var(--gray-2);
  border-left-color: ${({ borderColor }) => borderColor && borderColor};

  &:hover {
    @media screen and (min-width: 700px) {
      background-color: black;
      color: white;
    }
  }

  &:active {
    background-color: var(--yellow-1);
  }

  & > button {
    cursor: pointer;
  }
`;
const DummyListItem = styled.li`
  border-bottom: 0.5px solid var(--gray-4);
  list-style: none;
  border-left: 0.8rem solid var(--gray-2);
  color: var(--gray-2);
  font-family: "Bitcount Mono Single Lt Circle", "Courier New", Courier,
    monospace;
  -webkit-font-smoothing: initial;

  &:hover {
    @media screen and (min-width: 700px) {
      color: var(--gray-3);
      border-left-color: var(--gray-3);
    }
  }

  & > button {
    cursor: not-allowed;
  }
`;

export async function getStaticProps() {
  const slugs = await client.fetch(`*[_type == "lookbook"][].slug.current`);

  return {
    props: {
      slugs,
    },
  };
}

const Row = ({ arr }: { arr: [{ slug: string; date: number }] }) => {};
