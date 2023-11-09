import styled from "@emotion/styled";
import Picasso from "../../public/images/picasso.jpeg";
import Image from "next/image";
import Head from "next/head";

const HomePage = () => {
  return (
    <HomeWrapper>
      <Head>
        <title>Superhighway</title>
        <meta name="description" content="Site for Superhighway" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ShopPageWrapper>
        <SImage
          src={Picasso}
          alt="Picasso"
          sizes={"(max-width: 768px) 80vw, (max-width: 1400px) 33vw, 22vw"}
        />
        <Centered>
          <div>Maya in a Sailor Suit 1938</div>
          <div>121x86cm oil/canvas</div>
          <div>The Museum of Modern Art, New York</div>
        </Centered>
      </ShopPageWrapper>
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.main`
  padding: 2rem 0 3rem 0;
`;
const SImage = styled(Image)`
  height: 50rem;
  object-fit: contain;
`;
const ShopPageWrapper = styled.div`
  padding: var(--header-height) var(--gap-xs) var(--gap-xxl) var(--gap-xs);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  @media screen and (min-width: 500px) {
    padding: var(--header-height) var(--gap-xxl) var(--gap-xxl) var(--gap-xxl);
  }
`;
const Centered = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
