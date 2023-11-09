import styled from "@emotion/styled";
import Picasso from "../../public/images/picasso.jpeg";
import Image from "next/image";

const HomePage = () => {
  return (
    <HomeWrapper>
      <ShopPageWrapper>
        <SImage
          src={Picasso}
          alt="Picasso"
          sizes={"(max-width: 768px) 80vw, (max-width: 1400px) 33vw, 22vw"}
        />
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
