import { useQuery } from "react-query";
import { isEmpty } from "lodash";
import afreecatvApi from "@afreecatv/api";

const KEY = "STATION";
const {
  bj: { getBjStation },
} = afreecatvApi();

const useQueryStation = (userId: string) => {
  return useQuery([KEY, userId], {
    queryFn: () => getBjStation(userId),
    enabled: !isEmpty(userId),
    staleTime: 300_000, // 5 min
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    onError: (err) => {
      console.log("error on getBjStation");
      console.warn(err);
    },
  });
};

useQueryStation.KEY = KEY;
export default useQueryStation;
