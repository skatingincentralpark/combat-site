import { useState } from "react";
import Link from "../components/link";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Image from "../components/image";
import ShopCta from "../components/shop-cta";

const ShopItem = () => {
  const sizes = ["s", "m", "l", "xl"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <PageWrapper>
      <Link href="/shop">Go back</Link>
      <StyledImage>
        <Image src="/images/Bill2.png" />
      </StyledImage>
      <StyledTitle>
        <span>Viktor Tee</span>
        <span>$70 AUD</span>
      </StyledTitle>
      <StyledDescription>
        <p>
          100% Deadstock American cotton. Lightweight and soft. Spun to create
          slubby texture (similar to t-shirts from the mid-90s). Silkscreen
          graphic printed. Boxy fit – longer sleeves and shortened body.
        </p>
        <p>
          Please be aware that the t-shirt will stretch 2-3cm in the shoulders &
          chest with wear. The collar is initially snug, however will stretch to
          a perfect fit with wear.
        </p>
      </StyledDescription>
      <ShopCta
        sizes={sizes}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
    </PageWrapper>
  );
};

export default ShopItem;

const PageWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;

  padding: var(--gap-page-top) var(--gap-l);
`;
const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDescription = styled.div``;
const StyledImage = styled.div`
  aspect-ratio: 1 / 1;
`;
