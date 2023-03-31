const pageTransitionSpeed = 300;

const headerBackButtonVariants = () => {
  return {
    initial: {
      width: 0,
      backgroundColor: "#d9ff00",
    },
    animate: {
      width: "8rem",
      backgroundColor: "var(--yellow-1)",
    },
    exit: {
      width: 0,
      backgroundColor: "#fff",
    },
  };
};

const headerCartVariants = () => {
  return {
    initial: {
      height: 0,
      // backgroundColor: "#d9ff00",
    },
    animate: {
      height: "3rem",
      // backgroundColor: "var(--yellow-1)",
    },
    exit: {
      height: 0,
      // backgroundColor: "#fff",
      transition: {
        when: "afterChildren",
      },
    },
  };
};

const headerVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
  },
};

const headerInnerVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.5 },
  },
};

const cartModalVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
  },
};

const cartModalMobileCtaVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export {
  pageTransitionSpeed,
  headerBackButtonVariants,
  headerCartVariants,
  // header menu
  headerVariants,
  headerInnerVariants,
  // cart
  cartModalVariants,
  cartModalMobileCtaVariants,
};
