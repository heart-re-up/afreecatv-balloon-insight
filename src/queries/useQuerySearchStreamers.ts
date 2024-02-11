import { useQuery } from "react-query";
import { isEmpty } from "lodash";
import afreecatvApi from "@afreecatv/api/dist";

const KEY = "SEARCH_STREAMERS";
const {
  etc: { searchHistory },
} = afreecatvApi();
const queryFn = async (search: string) => {
  try {
    const response = await searchHistory(search);
    return response.suggestBj;
  } catch (e) {
    return [];
  }
};
const useSearchStreamers = (search: string) => {
  return useQuery([KEY, search], {
    queryFn: () => queryFn(search),
    enabled: !isEmpty(search),
    staleTime: 300_000,
  });
};

useSearchStreamers.KEY = KEY;
export default useSearchStreamers;
