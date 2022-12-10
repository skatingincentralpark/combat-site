import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { AnimatePresence, m } from "framer-motion";
import { headerBackButtonVariants } from "@lib/animate";
import { ButtonBaseMotion } from "@components/ui";

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

  const navigateToShop = () => router.push("/shop");
  const navigateToNews = () => router.push("/news");
  const navigateToLookbook = () => router.push("/lookbooks");

  return (
    <AnimatePresence>
      {isShopPath && !navOpen && !isLoading && (
        <HeaderBackButton
          onClick={navigateToShop}
          {...headerBackButtonVariants()}
        >
          <div>back</div>
        </HeaderBackButton>
      )}
      {isNewsPath && !navOpen && !isLoading && (
        <HeaderBackButton
          onClick={navigateToNews}
          {...headerBackButtonVariants()}
        >
          <div>back</div>
        </HeaderBackButton>
      )}
      {isLookbookPath && !navOpen && !isLoading && (
        <HeaderBackButton
          onClick={navigateToLookbook}
          {...headerBackButtonVariants()}
        >
          <div>back</div>
        </HeaderBackButton>
      )}
    </AnimatePresence>
  );
};

export default BackButton;

const HeaderBackButton = styled(ButtonBaseMotion)`
  height: 100%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
`;
