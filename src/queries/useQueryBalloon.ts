import { useQuery } from "react-query";
import { isEmpty } from "lodash";
import poongtoday from "@/lib/api/poongtoday";

const KEY = "BALLOON";
const {
  bj: { detailAll },
} = poongtoday();
const queryFn = async (id: string) => {
  try {
    return await detailAll(id);
  } catch (e) {
    return [];
  }
};
const useQueryBalloon = (id: string) => {
  return useQuery([KEY, id], {
    queryFn: () => queryFn(id),
    enabled: !isEmpty(id),
    staleTime: 30_000,
  });
};

useQueryBalloon.KEY = KEY;
export default useQueryBalloon;
