import Header from "../components/modules/admin/Header";
// import Home from "../components/modules/admin/Home";
import Sidenav from "../components/modules/admin/Sidenav";
import Footer from "../components/modules/footer/Footer";
// import Table from "../components/modules/admin/TableAirline";

import React from "react";
import TableBooking from './../components/modules/admin/TableBooking';

function admin() {
  return (
    <>
      <Header />
      <TableBooking />
      <Sidenav />
      <Footer />
    </>
  );
}

export default admin;
