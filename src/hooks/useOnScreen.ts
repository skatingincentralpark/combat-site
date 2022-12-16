import { useEffect, useState, useRef, RefObject } from "react";

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setTimeout(() => setIsOnScreen(entry.isIntersecting), 1000);
      // setIsOnScreen(entry.isIntersecting);

      if (observerRef.current && ref.current && entry.isIntersecting)
        observerRef.current.unobserve(ref.current);
    });
  }, []);

  useEffect(() => {
    if (observerRef.current && ref.current)
      observerRef.current.observe(ref.current);

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
