import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { AnimatePresence, m } from "framer-motion";
import { headerBackButtonVariants } from "@lib/animate";

const BackButton = ({
  navOpen,
  isLoading,
}: {
  navOpen: boolean;
  isLoading: boolean;
}) => {
  const router = useRouter();
  const checkIfShopPath = () => router.pathname.includes("/shop/");
  const checkIfNewsPath = () => router.pathname.includes("/news/");
  const checkIfLookbookPath = () => router.pathname.includes("/lookbooks/");

  const [isShopPath, setIsShopPath] = useState<boolean | null>(
    checkIfShopPath || null
  );
  const [isNewsPath, setIsNewsPath] = useState<boolean | null>(
    checkIfNewsPath || null
  );
  const [isLookbookPath, setIsLookbookPath] = useState<boolean | null>(
    checkIfLookbookPath || null
  );

  useEffect(() => {
    setIsShopPath(checkIfShopPath());
    setIsNewsPath(checkIfNewsPath());
    setIsLookbookPath(checkIfLookbookPath());
  }, [router.pathname, checkIfShopPath]);

  const navigateToShop = () => router.push("/shop-2");
  const navigateToNews = () => router.push("/news");
  const navigateToLookbook = () => router.push("/lookbooks");

  // const navOpenAndSiteLoading = !navOpen && !isLoading

  return (
    <AnimatePresence>
      {isShopPath && !navOpen && !isLoading && (
        <HeaderBackButton
          onClick={navigateToShop}
          {...headerBackButtonVariants()}
        >
          back
        </HeaderBackButton>
      )}
      {isNewsPath && !navOpen && !isLoading && (
        <HeaderBackButton
          onClick={navigateToNews}
          {...headerBackButtonVariants()}
        >
          back
        </HeaderBackButton>
      )}
      {isLookbookPath && !navOpen && !isLoading && (
        <HeaderBackButton
          onClick={navigateToLookbook}
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
