import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import axios from 'axios'

export default function BarCharts(props) {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [postData, setpostDataOptions] = useState([]);
  const baseURL = "https://jsonplaceholder.typicode.com";
  const map1 = new Map();

  useEffect(() => {
    axios
      .get(`${baseURL}/posts`)
      .then((res) => {
        setpostDataOptions(res.data);
        const map1 = new Map();
        for (let x in res.data) {
          if (isNaN(map1.get(res.data[x].userId))) {
            map1.set(res.data[x].userId, 1);
          } else {
            map1.set(res.data[x].userId, map1.get(res.data[x].userId) + 1);
          }
        }
  
        const data = {
          labels: Array.from(map1.keys()),
          datasets: [
            {
              label: "No. of Posts VS User",
              data: Array.from(map1.values()),
              backgroundColor: [
                "rgba(255, 159, 64, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)"
              ],
              borderColor: [
                "rgb(255, 159, 64)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)"
              ],
              borderWidth: 1
            }
          ]
        };
  
        const options = {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        };
        setChartData(data);
        setChartOptions(options);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
      <div className="card">
      { postData[0] && (<Chart type="bar" data={chartData} options={chartOptions} />)}
    </div>
    
  );
}
