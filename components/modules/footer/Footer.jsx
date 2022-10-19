import React from "react";
import styles from "../../../styles/Footer.module.css";
import playstore from "../../../assets/img/footer/playstore.svg";
import appstore from "../../../assets/img/footer/appstore.svg";
import angkasa from "../../../assets/img/logo.svg";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { 
  // faLocation, 
  faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="footer p-3 ">
      <div
        className={`${styles.footerContainer} container-fluid d-flex justify-content-around row row-cols-auto`}
      >
        <div className={`${styles.footer1} d-flex flex-column col`}>
          <div className="d-flex flex-start mb-4">
            <Image src={angkasa} />
          </div>
          <p>Find your Flight and explore the </p>
          <p>world with us. We will take care of the rest</p>
        </div>

        <div className={`${styles.feature}row row-cols-auto`}>
          <h5>features</h5>
          <div className="col">
            <Link href="#">
              <a className={`mb-2 mt-4 ${styles.link}`}>Find Ticket</a>
            </Link>
          </div>
          <div className="col">
            <Link href="#">
              <a className={`mb-2 ${styles.link}`}>My Booking</a>
            </Link>
          </div>
          <div className="col">
            <Link href="#">
              <a className={`mb-2 ${styles.link}`}>Chat</a>
            </Link>
          </div>
          <div className="col">
            <Link href="#">
              <a className={`mb-2 ${styles.link}`}>Notification</a>
            </Link>
          </div>
        </div>

        <div className="col">
          <h5>Download Angkasa app</h5>
          <div className="mt-4">
            <Image src={appstore} />
          </div>
          <div>
            <Image src={playstore} />
          </div>
        </div>

        <div className="d-flex flex-column col">
          <h5>Follow Us</h5>
          <div className="icons d-flex justify-content-between mt-4">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <div className={``}>© Ankasa. All Rights Reserved.</div>
        <div className="">
          <div className="d-flex">
            <FontAwesomeIcon icon={faLocationDot} />
            <div className=""> Jakarta Indonesia</div>
          </div>
        </div>
      </div>
    </div>
  );
}
