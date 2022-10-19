import { Fragment } from "react";
import styles from "../styles/404.module.css";
// import { useRouter } from "next/router";
// import Footer from "../components/modules/footer/Footer";

// import Image from "next/image";

const Costum404 = () => {
  // const router = useRouter();

  return (
    <Fragment>
      <div id={styles.notfound}>
        <div className={styles.notfound}>
          <div className={styles.notfound404}>
            <div></div>
            <h1>404</h1>
          </div>
          <h2>Page not found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <a href="/">home page</a>
        </div>
      </div>
    </Fragment>
  );
};

export default Costum404;
