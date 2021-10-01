/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';

const scrollTop = (): number =>
  Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop,
  );

/**
 * スクロール位置によってBooleanを返却
 * @returns
 */
export const useScroll = (val: number): boolean => {
  const [isTop, setIsTop] = useState<boolean>(false);

  const onScroll = (): void => {
    const position = scrollTop();
    if (position >= val) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return (): void => document.removeEventListener('scroll', onScroll);
  });

  return isTop;
};
