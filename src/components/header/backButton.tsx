import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { AnimatePresence, m } from "framer-motion";
import { headerBackButtonVariants } from "@lib/animate";

const BackButton = ({ navOpen }: { navOpen: boolean }) => {
  const router = useRouter();
  const checkIfShopPath = () => router.pathname.includes("/shop/");
  const checkIfNewsPath = () => router.pathname.includes("/news/");

  const [isShopPath, setIsShopPath] = useState<boolean | null>(
    checkIfShopPath || null
  );
  const [isNewsPath, setIsNewsPath] = useState<boolean | null>(
    checkIfNewsPath || null
  );

  useEffect(() => {
    setIsShopPath(checkIfShopPath());
    setIsNewsPath(checkIfNewsPath());
  }, [router.pathname, checkIfShopPath]);

  const navigateToShop = () => router.push("/shop-2");
  const navigateToNews = () => router.push("/news");

  return (
    <AnimatePresence>
      {isShopPath && !navOpen && (
        <HeaderBackButton
          onClick={navigateToShop}
          {...headerBackButtonVariants()}
        >
          back
        </HeaderBackButton>
      )}

      {isNewsPath && !navOpen && (
        <HeaderBackButton
          onClick={navigateToNews}
          {...headerBackButtonVariants()}
        >
          back
        </HeaderBackButton>
      )}
    </AnimatePresence>
  );
};

export default BackButton;

const HeaderBackButton = styled(m.button)`
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
`;
