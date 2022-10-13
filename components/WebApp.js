import Head from "next/head";
function WebApp({ webApp }) {
  return (
    <div>
      <Head>
        <title>
          {webApp.name.replace("-", " ")} | Project | Web | Mobile | Game
          Winniesoft
        </title>
      </Head>
      <main id="main">
        <section id="project-details" className="project-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <embed
                  src={webApp.homepage}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>

              <div className="col-lg-4">
                <div className="project-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: Web App
                    </li>
                    <li>
                      <strong>Owner</strong>:{" "}
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
                      <strong>Project date</strong>:{" "}
                      {webApp.pushed_at.slice(0, webApp.pushed_at.indexOf("T"))}
                    </li>
                    <li>
                      <strong>Project URL</strong>:
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
                      <strong>Project Demo</strong>:
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
                  <p>{webApp.language} App</p>
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
