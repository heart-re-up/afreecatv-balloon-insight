import { Bar } from "@nivo/bar";
import { useMemo } from "react";
import { find, map, sortBy } from "lodash";
import { Skeleton } from "@mui/material";
import useQueryBalloon from "@/queries/useQueryBalloon";

export interface DonorGraphProps {
  streamerId: string;
  donorId: string;
}

export default function DonorGraph(props: DonorGraphProps) {
  const { streamerId, donorId } = props;
  const { data = [], isLoading } = useQueryBalloon(streamerId);
  const barData = useMemo(() => {
    return map(data, (m) => {
      const date = m.getDateTime().toFormat("yyyy-MM");
      const donor = find(m.donors, (d) => d.userId === donorId);
      const balloon = donor?.balloon ?? 0;
      return {
        date,
        balloon,
      };
    });
  }, [donorId, data]);
  const sortedBarData = useMemo(
    () => sortBy(barData, (d) => d.date),
    [barData],
  );
  return isLoading ? (
    <div>
      <Skeleton variant="rectangular" width="100%" height={500} />
    </div>
  ) : (
    <div className="w-full bg-amber-50 overflow-auto">
      <Bar
        width={3000}
        height={500}
        data={sortedBarData}
        keys={["balloon"]}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "날짜",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`
        }
      />
    </div>
  );
}
