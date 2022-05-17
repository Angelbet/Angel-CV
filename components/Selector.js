import en from "../locales/en/en.json";
import es from "../locales/es/es";
import { useRouter } from "next/router";
import Link from "next/link";

const Selector = () => {
  // Cambio de Lenguaje
  const { asPath, locale, locales } = useRouter();
  const t = locale === "es" ? es : en;

  const router = useRouter();

//   const handleLocaleChange = (event) => {
//     const value = event.target.value;

//     router.push(router.route, router.asPath, {
//       locale: value,
//     });
//   };


  return (
    <>
      {locales.map((loc) => (
        <li key={loc}>
          <Link href={asPath} locale={loc}>
            <a>{loc}</a>
          </Link>
        </li>
      ))}

      {/* <select onChange={handleLocaleChange} value={router.locale}>
        <option value="en">🇺🇸 English</option>
        <option value="zh-CN">🇨🇳 中文</option>
        <option value="sv">🇸🇪 Swedish</option>
      </select> */}
    </>
  );
};

export default Selector;
