import en from "../components/translations/en/en";
import es from "../components/translations/es/es";
import { useRouter } from "next/router";
import Link from "next/link";

const Selector = () => {
  // Cambio de Lenguaje
  const { asPath, locale, locales } = useRouter();
  const t = locale === "es" ? es : en;

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
