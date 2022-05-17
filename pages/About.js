import Link from "next/link";
import en from "../locales/en/en.json";
import es from "../locales/es/es";
import { useRouter } from "next/router";

// import Image from "next/image";

function Home() {

  const { asPath, locale, locales } = useRouter();
  const t = locale === "es" ? es : en;

  if (typeof window !== "undefined") {
    function refresh() {
      setTimeout(function () {
        location.reload();
      }, 100);
    }
  }
  
  return (
    <div className="page-wrap">
      <header id="page-header" className="page-header">
        <div className="page-title">
          <h1>{t.about.h1}</h1>
        </div>
        <div className="img-card">
          {/* <Image
            src={"https://assets.codepen.io/t-1/juli-kosolapova-pZ-XFIrJMtE-unsplash.jpg"}
            alt="A desert scene. Deep orange sand and a cloudy sky, with craggy hills and mountains looming in the distance. "
          /> */}
        </div>
        {/* Photo by Juli Kosolapova for Unsplash. https://unsplash.com/photos/pZ-XFIrJMtE */}
      </header>
      <main className="page-main">
        <article>
          <h2>
            <span className="h_decoration" /> The journey of a thousand miles
            starts with a single step
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos laborum cumque incidunt, enim ipsa dicta? Porro illo
            doloribus, consectetur eum exercitationem sit ipsam, est nesciunt
            maxime, eius animi dolor? Harum.
          </p>
          {/* <img
            src="https://assets.codepen.io/t-1/saad-chaudhry-WdBu6PJ83uY-unsplash.jpg"
            alt="A distant view of a vast forest of evergreen trees covered with snow. A pink fog hovers close to the tops of the trees. "
          /> */}
          {/* Photo by Saad Chaudhry for Unsplash. https://unsplash.com/photos/WdBu6PJ83uY */}
          <h2>
            <span className="h_decoration" /> Expand Your Horizons
          </h2>
          <p>
            Illo numquam, sapiente neque repellendus facere amet doloribus
            asperiores quia eum? Sunt vero amet neque vel? Tempora, nulla
            voluptatum amet autem culpa magnam debitis! Dolores esse quam amet
            nobis ut.
          </p>
          {/* <img
            src="https://assets.codepen.io/t-1/claudel-rheault-ZVbv1akA-l4-unsplash.jpg"
            alt="A grassy field in a valley between green, grassy hills, beneath a sunlit sky filled with puffy clouds. "
          /> */}
          {/* image by Claudel Rheault for Unsplash. Full size at: https://unsplash.com/photos/ZVbv1akA-l4 */}
          <p>
            Sunt excepturi in nostrum, fugiat veritatis ab sit sequi nemo
            aperiam deserunt temporibus, dolorem ex adipisci autem. Quasi, iure
            fugiat! Nulla amet doloribus velit nam tempora, soluta consequatur
            doloremque omnis?
          </p>
          <h2>
            <span className="h_decoration" /> Explore and Reflect
          </h2>
          <p>
            {" "}
            Aenean iaculis odio et eleifend elementum. Pellentesque porta lacus
            sit amet ligula tristique ornare. Ut euismod suscipit enim. Morbi eu
            molestie odio. Nullam pellentesque bibendum magna non aliquet.
            Praesent commodo metus ut dapibus sollicitudin. Etiam tristique arcu
            et risus venenatis egestas. Mauris quis feugiat leo. Mauris
            scelerisque eleifend risus a suscipit. Praesent commodo pharetra
            vehicula. Praesent imperdiet luctus ex eget consectetur. Sed
            facilisis lobortis dolor quis scelerisque. Pellentesque porta orci
            nec viverra semper.
          </p>
          {/* <img
            src="https://assets.codepen.io/t-1/simon-berger-9Ct73yKbpEo-unsplash.jpg"
            alt="A waterfall, bathed in sunlight, pours down into a green river in a tropical forest. "
          /> */}
          {/* Photo by Simon Berger for Unsplash. https://unsplash.com/photos/9Ct73yKbpEo */}
          <p>
            In nec ornare mauris. Ut bibendum libero sit amet leo finibus
            ornare. Donec vel ultrices velit, vel congue elit. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Etiam blandit sem nisi, eget fringilla risus tristique
            sit amet. Ut quis dictum massa, nec tincidunt urna. Aliquam
            dignissim mi at eros egestas elementum. Phasellus tempor lectus id
            consectetur finibus. Etiam felis augue, ullamcorper sed pretium
            dictum, interdum sed nulla. Morbi eu ante ac tortor suscipit
            posuere. Praesent feugiat, dolor sed condimentum tincidunt, massa
            tortor congue lorem, eget sollicitudin nulla nibh sit amet justo.
            Pellentesque erat quam, iaculis pellentesque eros non, accumsan
            laoreet quam.
          </p>
          {/* <img
            src="https://assets.codepen.io/t-1/robert-bye-OlZ1nWLEEgM-unsplash.jpg"
            alt="A distant view of a cliffside beach. The water is deep blue and very calm."
          /> */}
          {/* photo by Robert Bye for Unsplash.  https://unsplash.com/photos/OlZ1nWLEEgM */}
          <p>
            Praesent nec lacus urna. Pellentesque hendrerit turpis sed dictum
            vehicula. Ut in sapien odio. Sed vitae finibus nisl. Pellentesque
            dui nisl, condimentum facilisis feugiat nec, dictum quis nisi. Donec
            pellentesque ornare mauris non congue. Integer consequat nulla at
            odio congue luctus.
          </p>
          <h2>
            <span className="h_decoration" /> Change Your Perspective
          </h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Quisque lobortis mattis turpis eu commodo.
            Donec diam massa, convallis at ex non, finibus lacinia ipsum.
            Vestibulum rutrum nunc mollis condimentum mollis. Nunc at nunc
            mauris. Proin magna nisl, imperdiet imperdiet malesuada a, gravida
            ac dolor. Vivamus ex ipsum, convallis vitae egestas in, dignissim eu
            augue. Nullam euismod orci lectus, ut tempor mauris malesuada sit
            amet.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos laborum cumque incidunt, enim ipsa dicta? Porro illo
            doloribus, consectetur eum exercitationem sit ipsam, est nesciunt
            maxime, eius animi dolor? Harum.
          </p>
          <p>
            Illo numquam, sapiente neque repellendus facere amet doloribus
            asperiores quia eum? Sunt vero amet neque vel? Tempora, nulla
            voluptatum amet autem culpa magnam debitis! Dolores esse quam amet
            nobis ut.
          </p>
        </article>
        <ul>
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
        </ul>
      </main>
      <footer className="page-footer"></footer>
    </div>
  );
}

export default Home;

