import Link from "next/link";
import Image from "next/image";
import profile from "../public/img/profile-1.png";
import proyect_1 from "../styles/assets/images/work_1.jpg";
import proyect_2 from "../styles/assets/images/work_2.jpg";
import proyect_3 from "../styles/assets/images/work_3.jpg";
import proyect_4 from "../styles/assets/images/work_4.jpg";
import Selector from "../components/Selector";

import en from "../locales/en/en.json";
import es from "../locales/es/es";

import Script_1 from "../components/Script_1";
import { useRouter } from "next/router";
// import pdf from "../public/pdf/Angel_Becerra_CV.pdf"

// import '../static/js/main'

// const main = dynamic(
//   () => {
//     return import("./main.js");
//   },
//   { ssr: false }
// );

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
                >
                  <i className="ri-mail-fill" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <i className="ri-linkedin-fill" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/angil_b3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="ri-instagram-fill" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/AngelBecerra13"
                  target="_blank"
                  rel="noreferrer"
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

      {/* Header End */}
      {/* banner */}
      <div className="ds-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
              <figure>
                <Image src={profile} alt="perfil" />
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
              <section>
                <h1>
                  <span>{t.home.hi}</span>
                  {/* Soy Angel Becerra <br /> Desarrollador Web y App Front-end con
                  sede en Venezuela. */}
                </h1>
                <div className="css-typing">
                  <h1>{t.home.me}</h1>
                  <h1>{t.home.me2}</h1>
                  <h1>{t.home.me3}</h1>
                  <h1>{t.home.me4}</h1>
                </div>

                <ul className="ds-numbervalulist">
                  <li>
                    <strong>2+</strong>
                    <span>{t.home.me5}</span>
                  </li>
                  <li>
                    <strong>5</strong>
                    <span>{t.home.me6}</span>
                  </li>
                  <li>
                    <strong>3</strong>
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
        <div className="container overlay">
          <section className="lope">
            <h2 className="ds-heading">{t.home.about}</h2>
            <p>{t.home.about2}</p>
            <p>{t.home.about3}</p>
            <div className="ds-button-sec text-center">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <a
                    href="./pdf/Angel_Becerra_CV.pdf"
                    target="_blank"
                    className="ds-button margin-bottom-lg"
                  >
                    Descargar CV | Español
                  </a>
                </div>
                <div className="col-md-5">
                  <a
                    href="./pdf/Angel_Becerra_CV.pdf"
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
        <div className="container overlay">
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
              <div className="card overlay">
                <div className="card-body lope">
                  <h2 className="ds-heading">{t.home.skill}</h2>
                  <ul className="ds-skills-list">
                    <li>JavaScript</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>CSS</li>
                    <li>Github</li>
                    <li>Webpack</li>
                    <li>HTML</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 grid-margin">
              <div className="card overlay">
                <div className="card-body lope">
                  <h2 className="ds-heading">{t.home.skill2}</h2>
                  <ul className="ds-skills-list">
                    <li>{t.home.skill3}</li>
                    <li>Photoshop</li>
                    <li>{t.home.skill4}</li>
                    <li>Illustrator</li>
                    <li>Hosting</li>
                    <li>{t.home.skill5}</li>
                    <li>Linux</li>
                    <li>Flutter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Habilidades */}
      {/* Experiencia */}
      <div className="ds-experience-section">
        <div className="container overlay">
          <section className="lope">
            <h2 className="ds-heading">{t.home.expirence}</h2>
            <div className="row ds-experience-list justify-content-center">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <section>
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
                <section>
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
                <section>
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
      <div className="ds-work-section">
        <div className="container overlay">
          <section className="lope">
            <h2 className="ds-heading">{t.home.work}</h2>
            <div className="ds-work-list-section">
              <div className="ds-work-list">
                <div className="row justify-content-center">
                  <div className="col-sm-5 grid-margin">
                    <div className="card overlay">
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
                    <div className="card overlay">
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
                    <div className="card overlay">
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
                    <div className="card overlay">
                      <div className="card-body lope">
                        <h3 className="ds-work-tilte">Colegio El Ángel</h3>
                        <div className="row justify-content-center">
                          <div className=" my-auto">
                            <div className="d-flex d-sm-block d-md-flex align-items-center">
                              <figure>
                                <Image src={proyect_4} alt="web3" />
                              </figure>
                            </div>
                            <a
                              href="http://64.227.2.149/"
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
            <h4>¿Preparado para Hablar?</h4>
            <p>No dude en contactarme</p>
            <a
              href="mailto:angelfabian.becerra@gmail.com"
              className="ds-button"
            >
              Hablemos
            </a>
          </section>
          <span className="ds-copyright" id="copyright">
            © {new Date().getFullYear()}. By
            <Link href="/"> Angel Becerra</Link>
          </span>
        </div>
      </footer>

      <Script_1 />
    </>
  );
}
