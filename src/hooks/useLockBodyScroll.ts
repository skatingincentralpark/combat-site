import { RefObject, useLayoutEffect } from "react";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

function useLockBodyScroll(elementRef: RefObject<Element>) {
  // Fix for mobile Safari scrolling to top - https://github.com/willmcpo/body-scroll-lock/issues/237
  useLayoutEffect(() => {
    // Disabling scroll works with temporary overwrite
    const storedRequestAnimationFrame = window.requestAnimationFrame;

    window.requestAnimationFrame = () => 42;
    if (!elementRef.current) return;
    disableBodyScroll(elementRef.current);
    window.requestAnimationFrame = storedRequestAnimationFrame;

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [elementRef]);
}

export default useLockBodyScroll;
