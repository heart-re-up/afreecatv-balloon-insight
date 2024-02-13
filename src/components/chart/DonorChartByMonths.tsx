import { Bar, BarDatum, BarTooltipProps, DataProps } from "@nivo/bar";
import { useEffect, useMemo, useRef, useState } from "react";

export interface DonorChartByMonthsProps<T extends BarDatum>
  extends DataProps<T> {
  keys: Array<string>;
  indexBy: string;
}

const tooltip = <T,>(p: BarTooltipProps<T>) => (
  <span className="p-1 bg-amber-50 text-fuchsia-900 text-sm rounded-sm">
    {p.indexValue} : {p.formattedValue}
  </span>
);

export default function DonorChartByMonths<T extends BarDatum>(
  props: DonorChartByMonthsProps<T>,
) {
  const { data, keys, indexBy } = props;
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  // const width = useMemo(() => ref.current?.clientWidth ?? 0, [ref.current]);
  const height = useMemo(() => data.length * 30, [data]);
  useEffect(() => {
    if (ref.current == null) return;
    setWidth(ref.current.clientWidth);
  }, []);
  return (
    <div className="w-full min-h-full" ref={ref}>
      <Bar
        width={width}
        height={height}
        data={data}
        keys={keys}
        indexBy={indexBy}
        theme={{
          axis: {
            ticks: {
              // line: {
              //   stroke: "#ffffff",
              // },
              text: {
                fill: "#ffffff",
              },
            },
          },
        }}
        margin={{ top: 0, right: 8, bottom: 0, left: 60 }}
        padding={0.3}
        layout="horizontal"
        valueFormat=" >-,"
        indexScale={{ type: "band", round: true }}
        colors="#aa3333"
        defs={
          [
            // linearGradientDef(
            //   "gradient",
            //   [
            //     { offset: 0, color: "#000" },
            //     { offset: 100, color: "inherit" },
            //   ],
            //   { rotate: -45 },
            // ),
            // {
            //   id: "dots",
            //   type: "patternDots",
            //   background: "inherit",
            //   color: "#38bcb2",
            //   size: 4,
            //   padding: 1,
            //   stagger: true,
            // },
            // {
            //   id: "lines",
            //   type: "patternLines",
            //   background: "inherit",
            //   color: "#eed312",
            //   rotation: -45,
            //   lineWidth: 6,
            //   spacing: 10,
            // },
          ]
        }
        fill={
          [
            // {
            //   match: {
            //     id: "balloon",
            //   },
            //   id: "gradient",
            // },
          ]
        }
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "년-월",
          legendPosition: "end",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        enableGridX
        enableGridY={false}
        labelSkipWidth={36}
        labelSkipHeight={0}
        labelTextColor="#fffabd"
        isInteractive
        tooltip={tooltip}
        // tooltip={(props) => ({
        //   label: props.data.date,
        //   color: "black",
        //   bar: {},
        // })}
        role="application"
        ariaLabel="vip donation values by months"
        barAriaLabel={(e) => `${e.id}: ${e.formattedValue} of ${e.indexValue}`}
      />
    </div>
  );
}
