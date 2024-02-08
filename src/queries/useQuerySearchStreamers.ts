import { useQuery } from "react-query";
import { api, ISuggestBj } from "@afreecatv/api";
import { isEmpty } from "lodash";

const KEY = "SEARCH_STREAMERS";
const {
  etc: { searchHistory },
} = api();
const queryFn = async (search: string) => {
  try {
    const response = await searchHistory(search);
    return response.suggest_bj;
  } catch (e) {
    return [] as ISuggestBj[];
  }
};
const useSearchStreamers = (search: string) => {
  return useQuery([KEY, search], {
    queryFn: () => queryFn(search),
    enabled: !isEmpty(search),
    staleTime: 30_000,
  });
};

useSearchStreamers.KEY = KEY;
export default useSearchStreamers;
