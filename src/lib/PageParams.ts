import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default interface PageParams {
  readonly params: Readonly<Params>;
  readonly searchParams: URLSearchParams;
}
