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
      width: 0,
      backgroundColor: "#d9ff00",
    },
    animate: {
      width: "6rem",
      backgroundColor: "var(--yellow-1)",
    },
    exit: {
      width: 0,
      backgroundColor: "#fff",
    },
  };
};

const headerVariants = {
  initial: {
    height: 0,
  },
  animate: {
    height: "100%",
    transition: { duration: 0.5, ease: "circOut" },
  },
  exit: {
    height: 0,
    transition: { duration: 0.5, ease: "circOut" },
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

export {
  pageTransitionSpeed,
  headerBackButtonVariants,
  headerCartVariants,
  headerVariants,
  headerInnerVariants,
};
