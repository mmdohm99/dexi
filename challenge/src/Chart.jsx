import { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
export const Chart = () => {
  const [users, setUsers] = useState([]);
  const [chart, setChart] = useState({
    labels: [],
    datasets: [
      {
        label: "Age",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setUsers(res.data.users);
      setChart({
        labels: res?.data?.users?.map((user) => user.firstName),
        datasets: [
          {
            label: "Age",
            data: res?.data?.users?.map((user) => user.age),
            borderColor: "red",
            backgroundColor: "red",
          },
          {
            label: "weight",
            data: res?.data?.users?.map((user) => user.weight),
            backgroundColor: "green",
          },
          {
            label: "height",
            data: res?.data?.users?.map((user) => user.height),
            backgroundColor: "orange",
          },
        ],
      });
    });
  }, []);
  console.log(users);

  return (
    <div style={{ width: "1250px" }}>
      <Bar data={chart} />
    </div>
  );
};
