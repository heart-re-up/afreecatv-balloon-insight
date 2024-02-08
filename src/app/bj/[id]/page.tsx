"use client";

import { useMemo } from "react";
import PageParams from "@/lib/PageParams";
import useQueryBalloon from "@/queries/useQueryBalloon";
import collectViewers from "@/lib/utils/collectViewers";

export default function Page({ params }: PageParams) {
  const { id } = params;
  const { data = [] } = useQueryBalloon(id);
  const viewers = useMemo(() => collectViewers(...data), [data]);
  return (
    <>
      <pre>{JSON.stringify(data, null, 4)}</pre>
      <pre>{JSON.stringify(viewers, null, 4)}</pre>
    </>
  );
}
