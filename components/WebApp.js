import Head from "next/head";
import { useTranslation } from "react-i18next";
function WebApp({ webApp }) {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Head>
        <title>
          {webApp.name
            .replace("-", " ")
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
              letter.toUpperCase()
            )}{" "}
          | Project | Web | Mobile | Game | Winniesoft
        </title>
      </Head>
      <main id="main">
        <section id="project-details" className="project-details">
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-8"
                style={{
                  height: "80vh",
                  maxHeight: "80vh",
                }}
              >
                <embed
                  src={webApp.homepage}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <div className="col-lg-4">
                <div className="project-info">
                  <h3>{t("singleProjectTitle")}</h3>
                  <ul>
                    <li>
                      <strong>{t("singleProjectCategory")}</strong>:{" "}
                      {t("projectsCategory3")}
                    </li>
                    <li>
                      <strong>{t("singleProjectOwner")}</strong>:{" "}
                      <a
                        href={webApp.owner.html_url}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        {" "}
                        {webApp.owner.login}
                      </a>
                    </li>
                    <li>
                      <strong>{t("singleProjectDate")}</strong>:{" "}
                      {webApp.pushed_at.slice(0, webApp.pushed_at.indexOf("T"))}
                    </li>
                    <li>
                      <strong>{t("singleProjectUrl")}</strong>:
                      <a
                        href={webApp.html_url}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        {" "}
                        Link
                      </a>
                    </li>
                    <li>
                      <strong>{t("singleProjectDemo")}</strong>:
                      <a
                        href={webApp.homepage}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        {" "}
                        Link
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="project-description">
                  <h2>
                    {webApp.name
                      .replace("-", " ")
                      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                        letter.toUpperCase()
                      )}
                  </h2>
                  <p>
                    {webApp.language} {t("singleProjectDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default WebApp;
