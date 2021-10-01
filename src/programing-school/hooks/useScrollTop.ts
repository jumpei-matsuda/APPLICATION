/* eslint-disable import/prefer-default-export */
import { useRef, useCallback, RefObject } from 'react';

export const useScrollTop = (): {
  topRef: RefObject<HTMLDivElement>;
  scrollToTop: () => void;
} => {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = useCallback(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [topRef]);

  return { topRef, scrollToTop };
};
