import "./styles.css";
import Header from "./components/Header";
import BarChart from "./components/BarChart";
import Table from "./components/Table";
import Card from "./components/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default function App() {
  const baseURL = "https://jsonplaceholder.typicode.com";
  const [userData, setuserData] = useState("");
  const [postData, setpostData] = useState("");
  const [commentsData, setcommentsData] = useState("");
  const [albumsData, setalbumsData] = useState("");

  useEffect(() => {
     axios
      .get(`${baseURL}/users`)
      .then((res) => {
        setuserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${baseURL}/posts`)
      .then((res) => {
        setpostData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${baseURL}/comments`)
      .then((res) => {
        setcommentsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`${baseURL}/albums`)
      .then((res) => {
        setalbumsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  
  return (
    <div className="App">
      <Header
        userCount={userData.length}
        postCount={postData.length}
        commentsCount={commentsData.length}
        albumsCount={albumsData.length}
      />
      <BarChart/>
      <Table />
      <Card />
    </div>
  );
}
