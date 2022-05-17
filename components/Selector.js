import en from "../locales/en/en.json";
import es from "../locales/es/es";
import { useRouter } from "next/router";
import Link from "next/link";

const Selector = () => {
  // Cambio de Lenguaje
  const { asPath, locale, locales } = useRouter();
  const t = locale === "es" ? es : en;

  const router = useRouter();

  return (
    <>
      {locales.map((loc) => (
        <li key={loc}>
          <Link href={asPath} locale={loc}>
            <a>{loc}</a>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Selector;
