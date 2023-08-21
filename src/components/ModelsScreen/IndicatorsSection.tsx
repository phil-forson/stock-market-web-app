import { ApexOptions } from "apexcharts";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const IndicatorsSection = () => {
  const [seriesData, setSeriesData] = useState([
    {
      name: "Monthly",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: "Daily",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: "Hourly",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ]);

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    title: {
      text: "Bollinger Bands",
      align: "left",
    },
    legend: {
      tooltipHoverFormatter: function (val: any, opts: any) {
        return (
          val +
          " - " +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ""
        );
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val: any) {
              return val + " (mins)";
            },
          },
        },
        {
          title: {
            formatter: function (val: any) {
              return val + " per session";
            },
          },
        },
        {
          title: {
            formatter: function (val: any) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };
  return (
    <div className="bg-white p-5 rounded-[15px] indicators">
      <div className="text-[20px] text-center font-bold">Indicators</div>
      <ReactApexChart
        options={options}
        series={seriesData}
        type="line"
        height={400}
      />
    </div>
  );
};

export default IndicatorsSection;