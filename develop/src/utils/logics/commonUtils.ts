/* eslint-disable import/prefer-default-export */

/**
 * 指定されたkeyでlistをソート
 * @param list 
 * @param key 
 * @returns 
 */
export const sortArray = <T>(list: T[], key: keyof T): T[] => (
  list.sort((a, b) =>
    (a[key] < b[key]) ? -1 : 1  // オブジェクトの昇順ソート
  )
);



