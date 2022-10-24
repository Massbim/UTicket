import React, { Fragment } from "react";
import styles from "./home.module.css";
import home1 from "../../assets/img/home/home1.svg";
import home2 from "../../assets/img/home/home2.svg";
import home3 from "../../assets/img/home/home3.svg";
import paris  from '../../assets/img/home/destinasi.svg'
import Image from "next/image";
import Trending from "../../components/Trending";
import TopTen from "../../components/TOP10";
// import SearchPopUp from "../../components/searchPopUp/searchPopUp";
// import NavbarProfile from "../../components/navbarProfile";


const Home = () => {
  return (
    <Fragment>
      <div className={styles.header}>
        <div className={styles["header-left"]}>
          <div className={styles.catchphrase}>
            <p>
              Find your <span>Flight</span>
            </p>
            <p>and explore the world with us</p>
          </div>
          <div className={`${styles.img}`}>
            <Image src={home2} alt="" />
          </div>
        </div>

        <div className={`${styles["header-right"]}`}>
          <div >
            <Image src={home1} alt="" />
          </div>
          <div >
            <Image src={home3} alt="" />
          </div>
        </div>
      </div>
      {/* <SearchPopUp /> */}
      <Trending />
      <TopTen 
        src={paris}
        title="paris"
      />
      {/* <div className={styles.content} style={{ width: "1348px" }}>

      </div> */}
    </Fragment>
  );
};

export default Home;
