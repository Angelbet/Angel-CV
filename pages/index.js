import Link from "next/link";
import Image from "next/image";
import profile from "../public/img/profile-1.png";
import proyect_1 from "../styles/assets/images/work_1.jpg";
import proyect_2 from "../styles/assets/images/work_2.jpg";
import proyect_3 from "../styles/assets/images/work_3.jpg";
import proyect_4 from "../styles/assets/images/work_4.jpg";
import proyect_5 from "../styles/assets/images/work_5.jpg";
import proyect_6 from "../styles/assets/images/work_6.jpg";
import proyect_7 from "../styles/assets/images/work_7.jpg";
import proyect_8 from "../styles/assets/images/work_8.jpg";
import Selector from "../components/Selector";


import AOS from "aos";
import "aos/dist/aos.css";

import en from "../locales/en/en.json";
import es from "../locales/es/es";

import Script_1 from "../components/Script_1";
import { useRouter } from "next/router";


export default function Home() {
  // Cambio de Lenguaje
  const router = useRouter();
  const { asPath, locale, locales } = useRouter();
  const t = locale === "es" ? es : en;

  // Reload de la Pagina
  if (typeof window !== "undefined") {
    function refresh() {
      setTimeout(function () {
        location.reload();
      }, 100);
    }

    

  }

  return (
    <>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Google Fots */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      {/* Remixicon Icon */}
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      {/* Remixicon Icon */}
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      {/* CSS */}
      <title>Angel Becerra</title>
      <link href="/static/css.css" rel="stylesheet" />

      {/* header */}
      <header className="ds-header overlay-2" id="site-header">
        <div className="container">
          <div className="ds-header-inner">
            {/* logo */}
            <a href="#" className="ds-logo">
              <span>&nbsp;A&nbsp;</span>Angel Becerra
            </a>
            {/* logo */}
            {/* social */}
            <ul className="ds-social justify-content-center">
              <li>
                <a
                  href="mailto:angelfabian.becerra@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  title="Email"
                >
                  <i className="ri-mail-fill" />
                </a>
              </li>
              <li>
                <a
                  href="http://linkedin.com/in/angel-becerra-2a4435202"
                  target="_blank"
                  rel="noreferrer"
                  title="Linkedin"
                >
                  <i className="ri-linkedin-fill" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/angil_b3/"
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                >
                  <i className="ri-instagram-fill" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/AngelBecerra13"
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                >
                  <i className="ri-facebook-fill" />
                </a>
              </li>
              <Selector />
            </ul>
            {/* social */}
          </div>
        </div>
      </header>
      {/* header */}

      {/* banner */}
      <div className="ds-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
              <figure>
                <Image
                  src={profile}
                  alt="perfil"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                />
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
              <section>
                <h1 data-aos="fade-left" data-aos-duration="1000">
                  <span>{t.home.hi}</span>
                  {/* Soy Angel Becerra <br /> Desarrollador Web y App Front-end con
                  sede en Venezuela. */}
                </h1>
                <div
                  className="css-typing"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h1>{t.home.me}</h1>
                  <h1>{t.home.me2}</h1>
                  <h1>{t.home.me3}</h1>
                  <h1>{t.home.me4}</h1>
                </div>

                <ul
                  className="ds-numbervalulist"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <li>
                    <strong>2+</strong>
                    <span>{t.home.me5}</span>
                  </li>
                  <li>
                    <strong>11</strong>
                    <span>{t.home.me6}</span>
                  </li>
                  <li>
                    <strong>15</strong>
                    <span>{t.home.me7}</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* banner */}

      {/* Sobre mi */}
      <div className="ds-about-section">
        <div
          className="container overlay"
          data-aos="zoom-in-left"
          data-aos-duration="2500"
        >
          <section className="lope">
            <h2 className="ds-heading">{t.home.about}</h2>
            <p>{t.home.about2}</p>
            <p>{t.home.about3}</p>
            <div className="ds-button-sec text-center">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <a
                    href="./pdf/Angel_Becerra_CV_es.pdf"
                    target="_blank"
                    className="ds-button margin-bottom-lg"
                    data-aos="zoom-in-left"
                    data-aos-duration="1000"
                  >
                    Descargar CV | Español
                  </a>
                </div>
                <div
                  className="col-md-5"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <a
                    href="./pdf/Angel_Becerra_CV_en.pdf"
                    target="_blank"
                    className="ds-button"
                  >
                    Download CV | English
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Sobre mi */}

      {/* Educación */}
      <div className="ds-experience-section">
        <div
          className="container overlay"
          data-aos="zoom-in-right"
          data-aos-duration="2500"
        >
          <section className="lope">
            <h2 className="ds-heading">{t.home.education}</h2>

            <div className="education" id="education">
              <div className="content-inner">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>
                        2019
                        <i>
                          <strong> / </strong>
                        </i>
                        {t.home.education2}
                      </span>
                      <h3 className="ds-officename">{t.home.education3}</h3>
                      <p>{t.home.education4}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2021</span>
                      <h3 className="ds-officename">
                        Javascript with HTML5, CSS3 from zero to Expert-2021
                      </h3>
                      <p>
                        {t.home.udemy} &nbsp; &nbsp;
                        <a
                          href="./pdf/Courses/Certificate_1.pdf"
                          target="_blank"
                          className="ds-button"
                          rel="noreferrer"
                        >
                          {t.home.show}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2022</span>
                      <h3 className="ds-officename">{t.home.education5}</h3>
                      <p>
                        {t.home.udemy} &nbsp; &nbsp;
                        <a
                          href="./pdf/Courses/Certificate_2.pdf"
                          target="_blank"
                          className="ds-button"
                          rel="noreferrer"
                        >
                          {t.home.show}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2022</span>
                      <h3 className="ds-officename">{t.home.education6}</h3>
                      <p>
                        {t.home.udemy} &nbsp; &nbsp;
                        <a
                          href="./pdf/Courses/Certificate_3.pdf"
                          target="_blank"
                          className="ds-button"
                          rel="noreferrer"
                        >
                          {t.home.show}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2022</span>
                      <h3 className="ds-officename">{t.home.education7}</h3>
                      <p>
                        {t.home.udemy} &nbsp; &nbsp;
                        <a
                          href="./pdf/Courses/Certificate_4.pdf"
                          target="_blank"
                          className="ds-button"
                          rel="noreferrer"
                        >
                          {t.home.show}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2022</span>
                      <h3 className="ds-officename">{t.home.education8}</h3>
                      <p>
                        {t.home.udemy} &nbsp; &nbsp;
                        <a
                          href="./pdf/Courses/Certificate_5.pdf"
                          target="_blank"
                          className="ds-button"
                          rel="noreferrer"
                        >
                          {t.home.show}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2022</span>
                      <h3 className="ds-officename">
                        Adobe Photoshop CC Fundamentals and Essentials Training
                      </h3>
                      <p>
                        {t.home.udemy} &nbsp; &nbsp;
                        <a
                          href="./pdf/Courses/Certificate_6.pdf"
                          target="_blank"
                          className="ds-button"
                          rel="noreferrer"
                        >
                          {t.home.show}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2022</span>
                      <h3 className="ds-officename">
                        Complete Figma Web Design Course UI UX Design with
                        Projects
                      </h3>
                      <p>
                        {t.home.udemy} &nbsp; &nbsp;
                        <a
                          href="./pdf/Courses/Certificate_7.pdf"
                          target="_blank"
                          className="ds-button"
                          rel="noreferrer"
                        >
                          {t.home.show}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2022</span>
                      <h3 className="ds-officename">GitLab</h3>
                      <p>
                        {t.home.udemy} &nbsp; &nbsp;
                        <a
                          href="./pdf/Courses/Certificate_8.pdf"
                          target="_blank"
                          className="ds-button"
                          rel="noreferrer"
                        >
                          {t.home.show}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2022</span>
                      <h3 className="ds-officename">
                        Practical Next.js &amp; React - Build a real WebApp with
                        Next.js
                      </h3>
                      <p>
                        {t.home.udemy} &nbsp; &nbsp;
                        <a
                          href="./pdf/Courses/Certificate_9.pdf"
                          target="_blank"
                          className="ds-button"
                          rel="noreferrer"
                        >
                          {t.home.show}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Educación */}

      {/*  Habilidades */}
      <div className="ds-skills-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 grid-margin">
              <div
                className="card overlay"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <div className="card-body lope">
                  <h2 className="ds-heading">{t.home.skill}</h2>
                  <ul className="ds-skills-list">
                    <li data-aos="zoom-in-right" data-aos-duration="2000">
                      JavaScript
                    </li>
                    <li data-aos="zoom-in-left" data-aos-duration="2000">
                      Node.js
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration="2000">
                      Express.js
                    </li>
                    <li data-aos="zoom-in-left" data-aos-duration="2000">
                      MongoDB
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration="2000">
                      Next.js
                    </li>
                    <li data-aos="zoom-in-left" data-aos-duration="2000">
                      React
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration="2000">
                      CSS
                    </li>
                    <li data-aos="zoom-in-left" data-aos-duration="2000">
                      Github
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration="2000">
                      Webpack
                    </li>
                    <li data-aos="zoom-in-left" data-aos-duration="2000">
                      HTML
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 grid-margin">
              <div
                className="card overlay"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <div className="card-body lope">
                  <h2 className="ds-heading">{t.home.skill2}</h2>
                  <ul className="ds-skills-list">
                    <li data-aos="zoom-in-right" data-aos-duration="2000">
                      {t.home.skill3}
                    </li>
                    <li data-aos="zoom-in-left" data-aos-duration="2000">
                      Photoshop
                    </li>
                    <li data-aos="zoom-in-left" data-aos-duration="2000">
                      Figma
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration="2000">
                      {t.home.skill4}
                    </li>
                    <li data-aos="zoom-in-left" data-aos-duration="2000">
                      Illustrator
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration="2000">
                      Hosting
                    </li>
                    <li data-aos="zoom-in-left" data-aos-duration="2000">
                      {t.home.skill5}
                    </li>
                    <li data-aos="zoom-in-right" data-aos-duration="2000">
                      Linux
                    </li>
                    <li data-aos="zoom-in-left" data-aos-duration="2000">
                      Flutter
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Habilidades */}
      {/* Experiencia */}
      <div
        className="ds-experience-section"
        data-aos="fade-in"
        data-aos-duration="3500"
      >
        <div className="container overlay">
          <section className="lope">
            <h2 className="ds-heading">{t.home.expirence}</h2>
            <div className="row ds-experience-list justify-content-center">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <section data-aos="fade-up" data-aos-duration="4500">
                  <span className="ds-year">2021 - 2021</span>
                  <h3 className="ds-officename">Somax Group</h3>
                  <span className="ds-department">{t.home.expirence2}</span>
                  <p>{t.home.expirence3}</p>
                  <p>
                    <strong>{t.home.tegnologies}</strong>
                  </p>
                  <ul className="ds-skills-list">
                    <li>JavaScript</li>
                    <li>Jquery</li>
                    <li>CSS</li>
                    <li>HTML</li>
                  </ul>
                </section>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <section data-aos="fade-up" data-aos-duration="4500">
                  <span className="ds-year">2021 - 2022</span>
                  <h3 className="ds-officename">Ferro Aluminio</h3>
                  <span className="ds-department">{t.home.expirence2}</span>
                  <p>{t.home.expirence4}</p>
                  <p>
                    <strong>{t.home.tegnologies}</strong>
                  </p>
                  <ul className="ds-skills-list">
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>Jquery</li>
                    <li>CSS</li>
                    <li>HTML</li>
                  </ul>
                </section>
              </div>
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <section data-aos="fade-up" data-aos-duration="4500">
                  <span className="ds-year">2022 - 2022</span>
                  <h3 className="ds-officename">Comproy</h3>
                  <span className="ds-department">{t.home.expirence5}</span>
                  <p>{t.home.expirence6}</p>
                  <p>
                    <strong>{t.home.tegnologies}</strong>
                  </p>
                  <ul className="ds-skills-list">
                    <li>Node.JS</li>
                    <li>JavaScript</li>
                    <li>Webpack</li>
                    <li>Jquery</li>
                    <li>Express.JS</li>
                    <li>React.JS</li>
                    <li>CSS</li>
                    <li>HTML</li>
                  </ul>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Experiencia */}
      {/*  Trabajos */}
      <div
        className="ds-work-section"
        data-aos="fade-in"
        data-aos-duration="3500"
      >
        <div className="container overlay">
          <section className="lope">
            <h2 className="ds-heading">{t.home.work}</h2>
            <div className="ds-work-list-section">
              <div className="ds-work-list">
                <div className="row justify-content-center">
                  <div className="col-sm-5 grid-margin">
                    <div
                      className="card overlay"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    >
                      <div className="card-body lope">
                        <h3 className="ds-work-tilte">Somax Group</h3>
                        <div className="row justify-content-center">
                          <div className=" my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <figure>
                                <Image src={proyect_1} alt="web1" />
                              </figure>
                            </div>
                            <a
                              href="https://somaxgroup.com/"
                              target="_blank"
                              className="ds-button"
                              rel="noreferrer"
                            >
                              {t.home.show}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 grid-margin">
                    <div
                      className="card overlay"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    >
                      <div className="card-body lope">
                        <h3 className="ds-work-tilte">Ferro Aluminio</h3>
                        <div className="row justify-content-center">
                          <div className=" my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <figure>
                                <Image src={proyect_2} alt="web2" />
                              </figure>
                            </div>
                            <a
                              href="https://ferralca.com.ve/"
                              target="_blank"
                              className="ds-button"
                              rel="noreferrer"
                            >
                              {t.home.show}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ds-work-list">
                <div className="row justify-content-center">
                  <div className="col-sm-5 grid-margin">
                    <div
                      className="card overlay"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    >
                      <div className="card-body lope">
                        <h3 className="ds-work-tilte">Comproy</h3>
                        <div className="row justify-content-center">
                          <div className=" my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <figure>
                                <Image src={proyect_3} alt="web3" />
                              </figure>
                            </div>
                            <a
                              href="https://comproy.com/"
                              target="_blank"
                              className="ds-button"
                              rel="noreferrer"
                            >
                              {t.home.show}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 grid-margin">
                    <div
                      className="card overlay"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    >
                      <div className="card-body lope">
                        <h3 className="ds-work-tilte">Colegio El Ángel</h3>
                        <div className="row justify-content-center">
                          <div className=" my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <figure>
                                <Image src={proyect_4} alt="web4" />
                              </figure>
                            </div>
                            <a
                              href="https://test-web-2ab.000webhostapp.com/index-4.html"
                              target="_blank"
                              className="ds-button"
                              rel="noreferrer"
                            >
                              {t.home.show}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 grid-margin">
                    <div
                      className="card overlay"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    >
                      <div className="card-body lope">
                        <h3 className="ds-work-tilte">MuraBox</h3>
                        <div className="row justify-content-center">
                          <div className=" my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <figure>
                                <Image src={proyect_5} alt="web5" />
                              </figure>
                            </div>
                            <a
                              href="https://test-web-1ab.000webhostapp.com/"
                              target="_blank"
                              className="ds-button"
                              rel="noreferrer"
                            >
                              {t.home.show}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 grid-margin">
                    <div
                      className="card overlay"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    >
                      <div className="card-body lope">
                        <h3 className="ds-work-tilte">Búcreativa</h3>
                        <div className="row justify-content-center">
                          <div className=" my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <figure>
                                <Image src={proyect_6} alt="web6" />
                              </figure>
                            </div>
                            <a
                              href="https://bucreativa.vercel.app/"
                              target="_blank"
                              className="ds-button"
                              rel="noreferrer"
                            >
                              {t.home.show}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 grid-margin">
                    <div
                      className="card overlay"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    >
                      <div className="card-body lope">
                        <h3 className="ds-work-tilte">EstructuraSP</h3>
                        <div className="row justify-content-center">
                          <div className=" my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <figure>
                                <Image src={proyect_7} alt="web6" />
                              </figure>
                            </div>
                            <a
                              href="https://estructurasp.com/"
                              target="_blank"
                              className="ds-button"
                              rel="noreferrer"
                            >
                              {t.home.show}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5 grid-margin">
                    <div
                      className="card overlay"
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                    >
                      <div className="card-body lope">
                        <h3 className="ds-work-tilte">GaleryAn</h3>
                        <div className="row justify-content-center">
                          <div className=" my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <figure>
                                <Image src={proyect_8} alt="web6" />
                              </figure>
                            </div>
                            <a
                              href="https://galeryan.com/"
                              target="_blank"
                              className="ds-button"
                              rel="noreferrer"
                            >
                              {t.home.show}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/*  Trabajos */}

      {/* <div className="container">
  <div className="row">
    <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h1 className="gallery-title">Cursos</h1>
    </div>
    <div align="center">
      <button className="btn btn-default filter-button" data-filter="all">
        1
      </button>
      <button className="btn btn-default filter-button" data-filter="hdpe">
        2
      </button>
      <button className="btn btn-default filter-button" data-filter="sprinkle">
        3
      </button>
      <button className="btn btn-default filter-button" data-filter="spray">
        4
      </button>
      <button
        className="btn btn-default filter-button"
        data-filter="irrigation"
      >
        UX
      </button>
    </div>
    <br />
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
      <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
      <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
      <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
      <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
      <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
      <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
      <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
      <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation">
      <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe">
      <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter spray">
      <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
    </div>
    <div className="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle">
      <img src="http://fakeimg.pl/365x365/" className="img-responsive" />
    </div>
  </div>
</div> */}

      {/* <ul>
        <li>
          <Link href="/" onClick={() => router.reload()}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/About" onClick={() => router.reload()}>
            <a>About Us</a>
          </Link>
        </li>
      </ul> */}
      {/*  footer */}
      <footer className="ds-footer text-center">
        <div className="container">
          <section>
            <h4 data-aos="fade-in" data-aos-duration="2000">
              {t.home.footer}
            </h4>
            <p data-aos="fade-in" data-aos-duration="2000">
              {t.home.footer2}
            </p>
            <a
              href="mailto:angelfabian.becerra@gmail.com"
              className="ds-button"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {t.home.talk}
            </a>
          </section>
          <span
            className="ds-copyright"
            id="copyright"
            data-aos="fade-in"
            data-aos-duration="2500"
          >
            © {new Date().getFullYear()}. By
            <Link href="/"> Angel Becerra</Link>
          </span>
        </div>
      </footer>

      <Script_1 />
    </>
  );
}
