"use client";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import DatasetIcon from "@mui/icons-material/Dataset";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { getCookie } from 'cookies-next';

export default function Home() {
  const [graph, setGraph] = useState<any[]>([]);
  const [bar, setBar] = useState(false);
  Chart.register(CategoryScale);

  const AllData = async () => {
    setBar(true);
    if (!graph || graph.length != 0) return;
    console.log("Hello from ALl data");
    try {
      const data = await axios({
        withCredentials: true,
        method: "GET",
        url: "http://127.0.0.1:4000/api/v1/users/allData",
      });
      setGraph(data.data.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
  
  }, []);

  const AllData2 = async () => {
    setBar(false);
    if (!graph || graph.length != 0) return;

    console.log("Hello from ALl data");
    try {
      const data = await axios({
        withCredentials: true,
        method: "GET",
        url: "http://127.0.0.1:4000/api/v1/users/allData",
      });
      console.log(data.data.data.data);
      setGraph(data.data.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <ArrowForwardIcon id="btn" />
        <ArrowBackIcon id="cancel" />
      </label>
      <div className="sidebar">
        <header>Dashboard</header>
        <ul>
          <li onClick={AllData}>
            <a className="">
              <EqualizerIcon id="icon1" />
              Analytics
            </a>
          </li>

          <li onClick={AllData2}>
            <a>
              <i className="fa-sharp fa-solid fa-users"></i>
              <DatasetIcon id="icon2" />
              Data
            </a>
          </li>
        </ul>
      </div>
      <section className="section">
        <h1></h1>
        <div className="cardcontainer">
          {graph.length > 0 ? (
            graph.map((el) => (
              <>
                <div className="card">
                  <div className="imgbox">
                    <h1>This is the data of {el?.user?.name}</h1>
                    <div id="myChart">
                      {bar ? (
                        <Bar
                          data={{
                            // Name of the variables on x-axies for each bar
                            labels: el.labels,
                            datasets: [
                              {
                                // Label for bars
                                label: "total count/value",
                                // Data or value of your each variable
                                data: el.data,
                                // Color of each bar
                                backgroundColor: [
                                  "aqua",
                                  "green",
                                  "red",
                                  "yellow",
                                ],
                                // Border color of each bar
                                borderColor: ["aqua", "green", "red", "yellow"],
                                borderWidth: 0.5,
                              },
                            ],
                          }}
                          // Height of graph
                          height={300}
                          options={{
                            plugins: {
                              title: {
                                display: true,
                                text: `Users Gained between ${el.labels[0]}-${
                                  el.labels[el.labels.length - 1]
                                }`,
                              },
                              legend: {
                                display: false,
                              },
                            },
                          }}
                        />
                      ) : (
                        <div className="rawData">{JSON.stringify(graph)}</div>
                      )}
                    </div>
                  </div>
                  <div className="content">
                    <h2>
                      <a> </a>
                    </h2>
                    <p></p>
                  </div>
                </div>
              </>
            ))
          ) : (
            <div className="card">
              <div className="imgbox">
                <h1>Select Analytics or data from Dashboard</h1>
                <div id="myChart"></div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
