import Link from "next/link";
import Image from "next/image";
import profile from "../styles/assets/images/profile-1.png";
import proyect_1 from "../styles/assets/images/work_1.jpg";
import proyect_2 from "../styles/assets/images/work_2.jpg";
import proyect_3 from "../styles/assets/images/work_3.jpg";
import Script_1 from "../components/Script_1";
import { useRouter } from "next/router";


// import '../static/js/main'

// const main = dynamic(
//   () => {
//     return import("./main.js");
//   },
//   { ssr: false }
// );

export default function Home() {
  const router = useRouter();

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
            <ul className="ds-social">
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
                  <span>¡Hola!</span>
                  {/* Soy Angel Becerra <br /> Desarrollador Web y App Front-end con
                  sede en Venezuela. */}
                </h1>
                <div className="css-typing">
                  <h1>Soy Angel Becerra</h1>
                  <h1>Desarrollador Web y</h1>
                  <h1>App Front-end con sede</h1>
                  <h1>en Venezuela.</h1>
                </div>

                <ul className="ds-numbervalulist">
                  <li>
                    <strong>2+</strong>
                    <span>Experiencia</span>
                  </li>
                  <li>
                    <strong>5</strong>
                    <span>Proyectos</span>
                  </li>
                  <li>
                    <strong>3</strong>
                    <span>Clientes Felices</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* banner */}

      {/* about */}
      <div className="ds-about-section">
        <div className="container overlay">
          <section className="lope">
            <h2 className="ds-heading">Sobre mi</h2>
            <p>
              Tengo 19 años y 2 años de experiencia como Desarrollador Web
              Front-End, a su vez estudiando actualmente Ingeniería en
              Informática. He trabajado como freelancer para algunas empresas
              con satisfactorios resultados. Soy una persona responsable en su
              trabajo, metódico, organizado y apasionado en lo que hace, soy
              pro-activo y disfruto tanto del trabajo en equipo como del
              desarrollado individualmente, en el cual puedo impregnar mi huella
              personal. Tomo cada proyecto y objetivo como propio, por lo que
              pongo mi mejor esfuerzo y empeño en cada tarea y trato siempre de
              optimizar el código al máximo para que la experiencia final del
              usuario sea la óptima.
            </p>
            <p>
              Me gusta aprender constantemente y me desenvuelvo en situaciones
              bajo presión y en cambio constante.
            </p>
            <div className="ds-button-sec text-center">
              <a href="#" className="ds-button">
                Descargar CV
              </a>
            </div>
          </section>
        </div>
      </div>
      {/* about */}

      {/* Educación */}
      <div className="ds-experience-section">
        <div className="container overlay">
          <section className="lope">
            <h2 className="ds-heading">Educación</h2>

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
                        Actualmente
                      </span>
                      <h3 className="ds-officename">
                        Universidad Alejandro de Humboldt
                      </h3>
                      <p>Ingeniería en Informática</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2021</span>
                      <h3 className="ds-officename">
                        Javascript with HTML5, CSS3 from zero to Expert-2021
                      </h3>
                      <p>Con Certificado de Finalización</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2022</span>
                      <h3 className="ds-officename">
                        Universidad Desarrollo Web - FrontEnd Web Developer
                      </h3>
                      <p>Con Certificado de Finalización</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2022</span>
                      <h3 className="ds-officename">
                        JavaScript: Desde cero con NodeJS
                      </h3>
                      <p>Con Certificado de Finalización</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2022</span>
                      <h3 className="ds-officename">
                        Desarrollo de Aplicaciones con JavaScript (Edición 2022)
                      </h3>
                      <p>Con Certificado de Finalización</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="edu-col ds-experience-list">
                      <span>2022</span>
                      <h3 className="ds-officename">React Desde Cero</h3>
                      <p>Con Certificado de Finalización</p>
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
                  <h2 className="ds-heading">Habilidades Principales</h2>
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
                  <h2 className="ds-heading">Otras Habilidades</h2>
                  <ul className="ds-skills-list">
                    <li>Diseño UX/UI</li>
                    <li>Photoshop</li>
                    <li>Diseño Web Responsivo</li>
                    <li>Illustrator</li>
                    <li>Hosting</li>
                    <li>Virtualizar</li>
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
            <h2 className="ds-heading">Experiencia de Trabajo</h2>
            <div className="row ds-experience-list justify-content-center">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <section>
                  <span className="ds-year">2021 - 2021</span>
                  <h3 className="ds-officename">Somax Group</h3>
                  <span className="ds-department">
                    Desarrollo Web Corporativo
                  </span>
                  <p>
                    Desarrollo Web estático con el objetivo de dar a conocer a
                    los usuarios, visitas o clientes toda la información
                    relacionada con una empresa.
                  </p>
                  <p>
                    <strong>Tecnologías empleadas:</strong>
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
                  <span className="ds-department">
                    Desarrollo Web Corporativo
                  </span>
                  <p>
                    Desarrollo Web estático montado en servidor Cpanel en
                    WordPress.
                  </p>
                  <p>
                    <strong>Tecnologías empleadas:</strong>
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
                  <span className="ds-department">
                    Desarrollo Web Finaciero
                  </span>
                  <p>
                    Pagina Web App dinámica ofrece una mayor interactividad con
                    los usuarios.
                  </p>
                  <p>
                    <strong>Tecnologías empleadas:</strong>
                  </p>
                  <ul className="ds-skills-list">
                    <li>Node.JS</li>
                    <li>JavaScript</li>
                    <li>Webpack</li>
                    <li>Jquery</li>
                    <li>Express.js</li>
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
            <h2 className="ds-heading">Trabajos</h2>
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
                            <a href="works-setails.html" className="ds-button">
                              Ver
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
                            <a href="works-setails.html" className="ds-button">
                              Ver
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
                            <a href="works-setails.html" className="ds-button">
                              Ver
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
