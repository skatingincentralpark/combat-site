const pageTransitionSpeed = 500;

const headerButtonVariants = () => {
  return {
    initial: {
      width: 0,
      backgroundColor: "#d9ff00",
    },
    animate: {
      width: "var(--back-button-width)",
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
      y: "-100%",
      transition: {
        ease: "easeIn",
      },
    },
    animate: {
      y: 0,
      transition: {
        ease: "easeOut",
      },
    },
    exit: {
      y: "-100%",
      transition: {
        ease: "easeIn",
      },
    },
  };
};

export { pageTransitionSpeed, headerButtonVariants, headerVariants };
