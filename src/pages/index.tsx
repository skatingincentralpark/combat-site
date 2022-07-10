import styled from "@emotion/styled";
import ColorStrips from "../components/color-strips";

const HomePage = () => {
  const colors = [
    "var(--green-2)",
    "var(--green-3)",
    "var(--yellow-1)",
    "var(--yellow-2)",
    "var(--olive-1)",
    "red",
    "orange",
  ];

  const colorsRepeated = [...colors];

  return (
    <PageWrapper>
      <PaddingWrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          voluptate eius eum maxime ipsa unde, aut blanditiis earum culpa
          dolorum eos nulla asperiores in soluta enim repudiandae sapiente
          explicabo rerum! Voluptatum ratione ducimus repellat sapiente ipsum
          perferendis, iure sint accusantium voluptates commodi aut cupiditate
          maxime, atque debitis quod sit a reprehenderit aliquid ullam. Qui
          reiciendis numquam officia aut, aliquid enim? Id vitae veritatis
          repellat, unde consequatur tempore dolorum optio illum asperiores
          ipsum officia facilis repudiandae architecto velit mollitia aliquam
          laborum! Veniam dolores necessitatibus quasi doloribus totam,
          consequuntur sequi cupiditate praesentium! Odit dolorem tempore fugit
          recusandae repudiandae aut reiciendis nesciunt doloribus, iure
          eligendi non facere porro quo cum omnis unde fugiat cumque veniam
          mollitia dolores blanditiis? Quis fugit omnis laudantium cumque?
        </p>
      </PaddingWrapper>
      <ColorStrips colors={colorsRepeated} />
    </PageWrapper>
  );
};

export default HomePage;

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;

  padding-top: var(--gap-page-top);
`;
const PaddingWrapper = styled.div`
  padding: var(--gap-l);
`;
