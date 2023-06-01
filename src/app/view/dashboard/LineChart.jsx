import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
const LineChart = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ["lineData"],
        queryFn: () =>
          fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then((res) =>
            res.json()
          ),
      });
      if (isLoading) return "Loading...";

      if (error) return "An error has occurred: " + error.message;
      console.log("Line tansatck", data);


      const lineData = {
        labels: Object.keys(data.cases),
        datasets: [
          {
            label: 'Cases',
            data: Object.values(data.cases),
            borderColor: 'blue',
            fill: false,
          },
          {
            label: 'Deaths',
            data: Object.values(data.deaths),
            borderColor: 'red',
            fill: false,
          },
          {
            label: 'Recoveries',
            data: Object.values(data.recovered),
            borderColor: 'green',
            fill: false,
          },
        ],
      };
    
      const options = {
        responsive: true,
        // width: "700px",
        // height: "50%",
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
  return (
    <div  style={{ width: "650px", height: "400px" }}>
    <Line  data={lineData} options={options} />
  </div>
  )
}

export default LineChart