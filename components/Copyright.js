import Link from "next/link";
import Socials from "./Socials";
import { useTranslation } from "react-i18next";
function Copyright() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container d-md-flex py-4 align-items-center">
      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; {t("copyright1")}{" "}
          <strong>
            <span>Winniesoft</span>
          </strong>
          . {t("copyright2")}
        </div>
        <div className="credits">
          <Link href={"/privacy-policy"}>
            <a>{t("privacyPolicy")}</a>
          </Link>
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default Copyright;
