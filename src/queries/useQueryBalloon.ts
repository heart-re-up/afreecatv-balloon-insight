import { useQuery } from "react-query";
import { api, ISuggestBj } from "@afreecatv/api";
import { isEmpty } from "lodash";

const KEY = "BALLOON";
const queryFn = async (id: string) => {
  try {
    const response = await api().etc.searchHistory(id);
    return response.suggest_bj;
  } catch (e) {
    return [] as ISuggestBj[];
  }
};
const seQueryBalloon = (id: string) => {
  return useQuery([KEY, id], {
    queryFn: () => queryFn(id),
    enabled: !isEmpty(id),
    staleTime: 30_000,
  });
};

seQueryBalloon.KEY = KEY;
export default seQueryBalloon;
