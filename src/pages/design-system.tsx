import styled from "@emotion/styled";
import { StyledPageWrapper } from "../components/shared-styles/page-wrappers";
import { StyledButton } from "../components/shared-styles/buttons";
import {
  Heading,
  HeadingSm,
  Text,
  TextSm,
} from "../components/shared-styles/typography";

const DesignSystemPage = () => {
  return (
    <StyledPageWrapper px="l">
      <HeaderSection>
        <Heading>
          <strong>Heading 1:</strong> Helvetica
        </Heading>
      </HeaderSection>
      <HeaderSection>
        <HeadingSm>
          <strong>Heading 2:</strong> Helvetica
        </HeadingSm>
      </HeaderSection>
      <TextSection>
        <Text paragraph>
          <strong>Text:</strong> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Commodi cumque quas repellat perspiciatis, facilis
          totam optio odio veritatis debitis placeat dolorem ullam pariatur
          explicabo nobis suscipit, dicta ex. Sunt, labore. Vel laudantium
          voluptatum recusandae. Perferendis reiciendis id facere labore!
          Repellendus, cum rerum ipsa debitis placeat, iste possimus aut aliquam
          fugit quidem a consectetur dolore fuga commodi repudiandae doloribus
          corporis animi. Nisi, itaque. Assumenda dolorum eveniet asperiores
          fuga illum magnam! Pariatur aliquam, dicta ullam enim autem doloribus
          minus? Excepturi, laborum est explicabo deleniti ullam aut aperiam
          repellendus, vero quo illo tempore?
        </Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          itaque ab in tempora iure fuga nam nesciunt quas aliquid aliquam amet
          quam quod totam eveniet hic excepturi, incidunt laboriosam asperiores!
          Officia accusantium facere omnis quis dignissimos consequuntur
          corrupti veniam rem fuga. Corporis nisi magni in ut, provident natus
          odit labore laborum quis esse molestiae repellat impedit nulla? Sunt,
          id accusamus. Animi quos, repudiandae dolorum tenetur labore eaque
          voluptas consequuntur vitae blanditiis laborum inventore temporibus
          ratione laboriosam voluptatum modi ut saepe eveniet commodi enim
          repellendus dignissimos quasi. Temporibus autem dolore dolorem!
        </Text>
      </TextSection>
      <TextSection>
        <TextSm paragraph>
          <strong>TextSm:</strong> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Commodi cumque quas repellat perspiciatis, facilis
          totam optio odio veritatis debitis placeat dolorem ullam pariatur
          explicabo nobis suscipit, dicta ex. Sunt, labore. Vel laudantium
          voluptatum recusandae. Perferendis reiciendis id facere labore!
          Repellendus, cum rerum ipsa debitis placeat, iste possimus aut aliquam
          fugit quidem a consectetur dolore fuga commodi repudiandae doloribus
          corporis animi. Nisi, itaque. Assumenda dolorum eveniet asperiores
          fuga illum magnam! Pariatur aliquam, dicta ullam enim autem doloribus
          minus? Excepturi, laborum est explicabo deleniti ullam aut aperiam
          repellendus, vero quo illo tempore?
        </TextSm>
        <TextSm>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          itaque ab in tempora iure fuga nam nesciunt quas aliquid aliquam amet
          quam quod totam eveniet hic excepturi, incidunt laboriosam asperiores!
          Officia accusantium facere omnis quis dignissimos consequuntur
          corrupti veniam rem fuga. Corporis nisi magni in ut, provident natus
          odit labore laborum quis esse molestiae repellat impedit nulla? Sunt,
          id accusamus. Animi quos, repudiandae dolorum tenetur labore eaque
          voluptas consequuntur vitae blanditiis laborum inventore temporibus
          ratione laboriosam voluptatum modi ut saepe eveniet commodi enim
          repellendus dignissimos quasi. Temporibus autem dolore dolorem!
        </TextSm>
      </TextSection>
      <ButtonSection>
        <StyledButton>Click</StyledButton>
      </ButtonSection>
    </StyledPageWrapper>
  );
};

export default DesignSystemPage;

// Sections
const HeaderSection = styled.div`
  border-bottom: 0.5px solid black;
  height: 5rem;
  display: flex;
  align-items: center;

  &:first-of-type {
    border-top: 0.5px solid black;
  }
`;

const TextSection = styled.div`
  border-bottom: 0.5px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;

  &:first-of-type {
    border-top: 0.5px solid black;
  }
`;

const ButtonSection = styled.div`
  border-bottom: 0.5px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;

  &:first-of-type {
    border-top: 0.5px solid black;
  }

  & > button {
    width: fit-content;
  }
`;

// mobile
// body: 14, 22, 0.02em (spacing)
// body: 12, 18, 0.02em (spacing)
// heading: 22, 28, -10 (spacing)
// heading: 16, 25, -10 (spacing)

// desktop
// body: 15, 22, 0.02em (spacing)
// body: 14, 20, 0.02em (spacing)
// heading: 24, 32, -10 (spacing)
// heading: 18, 25, -10 (spacing)
