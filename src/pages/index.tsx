import styled from "@emotion/styled";

const Home = () => {
  return (
    <ColorBlockWrapper>
      <p>
        hello world, welcome to combat this is a website i'm going to make for
        my clothing brand or art studio, fuck around for fun creative outlet
        that I want to build to share awesome art to everyone
      </p>
      <ColorBlock />
      <ColorBlock1 />
      <ColorBlock2 />
      <ColorBlock3 />
      <ColorBlock4 />
      <ColorBlock5 />
    </ColorBlockWrapper>
  );
};

export default Home;

const ColorBlockWrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 7rem;
`;
const ColorBlock = styled.div`
  width: 50px;
  height: 100%;
  display: inline-block;
  background-color: var(--green-1);
`;
const ColorBlock1 = styled(ColorBlock)`
  background-color: var(--green-2);
`;
const ColorBlock2 = styled(ColorBlock)`
  background-color: var(--green-3);
`;
const ColorBlock3 = styled(ColorBlock)`
  background-color: var(--yellow-1);
`;
const ColorBlock4 = styled(ColorBlock)`
  background-color: var(--yellow-2);
`;
const ColorBlock5 = styled(ColorBlock)`
  background-color: var(--olive-1);
`;
