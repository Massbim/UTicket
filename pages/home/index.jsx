// import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import home1 from "../../assets/img/home/home1.svg";
import home2 from "../../assets/img/home/home2.svg";
import home3 from "../../assets/img/home/home3.svg";
import paris  from '../../assets/img/home/destinasi.svg'
import Image from "next/image";
import Trending from "../../components/Trending";
import TopTen from "../../components/TOP10";
import SearchPopUp from "../../components/searchPopUp/searchPopUp";
// import NavbarProfile from "../../components/navbarProfile/index";


const Home = () => {
  
  
  return (
    <div>
      {/* <NavbarProfile find/> */}
      <div className={styles.header}>
        <div className={styles["header-left"]}>
          <div className={styles.catchphrase}>
            <p>
              Find your <span>Flight</span>
            </p>
            <p>and explore the world with us</p>
          </div>
          <div style={{ width: "830px" }}>
            <Image src={home2} alt="" />
          </div>
        </div>

        <div className={styles["header-right"]}>
          <div style={{ width: "400px" }}>
            <Image src={home1} alt="" />
          </div>

          <div style={{ width: "160px", margin: "80px 0 0 70px" }}>
            <Image src={home3} alt="" />
          </div>
        </div>
      </div>
      <Trending />
      <TopTen 
        src={paris}
        title="paris"
      />
      <SearchPopUp />
    </div>
  );
};

export default Home;
