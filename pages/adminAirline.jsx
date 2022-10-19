import Header from "../components/modules/admin/Header";
// import Home from "../components/modules/admin/Home";
import Sidenav from "../components/modules/admin/Sidenav";
// import Footer from "../components/modules/footer/Footer";
import Table from "../components/modules/admin/TableAirline";
// import Cookies from "js-cookie";
// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";

function admin() {
  return (
    <>
      <Table />
      <Sidenav />
      {/* <Footer /> */}
    </>
  );
}

export default admin;
