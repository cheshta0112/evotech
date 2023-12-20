import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import NewArrival from "./components/NewArrival";
import SunHeader from "./components/SunHeader";
import Tabs from "./components/Tabs";
import Categories from "./components/Categories";
import Stats from "./components/Stats";

export default function MainContainer() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 px-0">
          <Sidebar />
        </div>
        <div className="col-lg-10 ">
          <Header />
          <SunHeader />
          <Tabs />
          <Categories />
          <NewArrival />
          <Stats />
        </div>
      </div>
    </div>
  );
}
