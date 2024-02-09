import { useCallback, useMemo, useState } from "react";

export interface UseSliceReturnValue<T> {
  items: Array<T>;
  hasNext: boolean;
  pageTotal: number;
  next: () => void;
}
export default function useArrayAsPage<T>(
  array: Array<T>,
  pageSize: number = 10,
): UseSliceReturnValue<T> {
  const [page, setPage] = useState(1);
  // 마지막 페이지가 pageSize 로 딱 떨어지지 않는 경우 남는 엘리먼트 개수
  const finalPageRestElement = useMemo(
    () => array.length % pageSize,
    [array, pageSize],
  );
  // 마지막 페이지에 나머지 엘리먼트가 있는지 여부
  const hasRestElementPage = useMemo(
    () => finalPageRestElement > 0,
    [finalPageRestElement],
  );
  const pageTotal = useMemo(
    () => Math.floor(array.length / pageSize) + (hasRestElementPage ? 1 : 0),
    [array, pageSize, hasRestElementPage],
  );
  const items = useMemo(() => {
    if (page < pageTotal) {
      return array.slice(0, pageSize * page);
    }
    return array.slice(0, pageSize * page + finalPageRestElement);
  }, [array, pageTotal, pageSize, page, finalPageRestElement]);
  const hasNext = useMemo(() => items.length < array.length, [array, items]);
  const next = useCallback(() => {
    if (hasNext) {
      setPage((prevState) => prevState + 1);
    }
  }, [hasNext, setPage]);
  return {
    items,
    hasNext,
    pageTotal,
    next,
  };
}
