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

const headerVariants = () => {
  return {
    initial: {
      opacity: 0,
      y: -40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: [0.04, 0.62, 0.93, 0.98] },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: { duration: 0.3, ease: [0.04, 0.62, 0.93, 0.98] },
    },
  };
};

export {
  pageTransitionSpeed,
  headerBackButtonVariants,
  headerCartVariants,
  headerVariants,
};
