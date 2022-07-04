import "../static/css.css";
import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import { useEffect } from "react";

import "aos/dist/aos.css";


function MyApp({ Component, pageProps }) {


  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  
  return <Component {...pageProps} />
}

export default MyApp

