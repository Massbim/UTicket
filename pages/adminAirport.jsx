import Header from "../components/modules/admin/Header";
// import Home from "../components/modules/admin/Home";
import Sidenav from "../components/modules/admin/Sidenav";
import Footer from "../components/modules/footer/Footer";

import React from "react";
import TableAirport from "./../components/modules/admin/TableAirport";

function admin() {
  return (
    <>
      <Header />
      <TableAirport />
      <Sidenav />
      <Footer />
    </>
  );
}

export default admin;
