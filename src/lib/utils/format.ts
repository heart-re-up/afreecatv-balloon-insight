const formatter = new Intl.NumberFormat("ko-KR");
export default function formatNumber(value: number): string {
  return formatter.format(value);
}
