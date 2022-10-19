import Header from "../components/modules/admin/Header";
// import Home from "../components/modules/admin/Home";
import Sidenav from "../components/modules/admin/Sidenav";
import Footer from "../components/modules/footer/Footer";
// import Table from "../components/modules/admin/TableAirline";

import React from "react";
import TableFlight from "./../components/modules/admin/TableFlight";

function admin() {
  return (
    <>
      <Header />
      <TableFlight />
      <Sidenav />
      <Footer />
    </>
  );
}

export default admin;
