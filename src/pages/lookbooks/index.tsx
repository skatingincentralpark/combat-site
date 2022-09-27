import Link from "next/link";
import client from "../../../client";
import { StyledPageWrapperCentered } from "@components/shared-styles/page-wrappers";
import HeadSEO from "@components/head-seo";

type Props = {
  slugs: string[];
};

const Index = ({ slugs }: Props) => {
  return (
    <StyledPageWrapperCentered px="m">
      <HeadSEO title="Lookbooks" />
      {!!slugs &&
        slugs.map((slug, i) => (
          <div key={i}>
            <Link href={`lookbooks/${slug}`}>{slug}</Link>
          </div>
        ))}
    </StyledPageWrapperCentered>
  );
};

export default Index;

export async function getStaticProps() {
  const slugs = await client.fetch(`*[_type == "lookbook"][].slug.current`);

  return {
    props: {
      slugs,
    },
  };
}
