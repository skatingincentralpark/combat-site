const pageTransitionSpeed = 200;

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

export { pageTransitionSpeed, headerButtonVariants, headerVariants };
