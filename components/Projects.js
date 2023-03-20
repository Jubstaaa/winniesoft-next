import { playApps, cloneGames } from "./Data";
import { UilLink } from "@iconscout/react-unicons";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
function Projects({ webApps }) {
  const resultAll = [...playApps, ...cloneGames];
  const [result, setResult] = useState(playApps);
  const [webResult, setWebResult] = useState([]);
  let filters = ["Mobile Game / App", "Clone Game", "Web App"];

  useEffect(() => {
    document
      .querySelector("#project-flters li:first-child")
      .classList.add("filter-active");
  }, []);

  const filterFunc = (e) => {
    e.preventDefault();

    setResult(
      e.target.innerHTML === "Mobile Game / App"
        ? [...playApps]
        : e.target.innerHTML === "Clone Game"
        ? [...cloneGames]
        : []
    );

    setWebResult(e.target.innerHTML === "Web App" ? [...webApps] : []);

    document.querySelectorAll("#project-flters li").forEach((filter) => {
      filter.classList.remove("filter-active");
    });
    e.target.classList.add("filter-active");
  };

  return (
    <section id="project" className="project">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Projects</h2>
          <p>
            You can review the projects we have made, view source codes of
            public ones, try and play demos.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="project-flters">
              {filters.map((filter, i) => (
                <li className="mx-1" key={i} onClick={filterFunc}>
                  {filter}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row project-container">
          {result.map((app, i) => (
            <div
              key={i}
              className="col-lg-2 col-md-4 col-6  project-item filter-app"
            >
              <div className="project-wrap">
                <img
                  src={app.product_info.thumbnail.replace("s64", "s512")}
                  className="img-fluid"
                  alt={`${app.product_info.title} Project Thumbnail`}
                />
                <div className="project-info">
                  <h4>{app.product_info.title}</h4>
                  <p>{app.type}</p>
                  <div className="project-links">
                    <Link href={`/${app.name + "#header"}`}>
                      <a title="More Details">
                        <i className="mx-2">
                          <UilLink />
                        </i>
                        More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {webResult.map((webApp, i) => (
            <div
              key={i}
              className="col-lg-2 col-md-4 col-6  project-item filter-app"
            >
              <div className="project-wrap">
                <img
                  src="/assets/img/web-app.jpeg"
                  className="img-fluid"
                  alt=""
                />
                <div className="project-info">
                  <h4>
                    {webApp.name
                      .replaceAll("-", " ")
                      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                        letter.toUpperCase()
                      )}
                  </h4>
                  <p>Web App</p>
                  <div className="project-links">
                    <Link href={`/${webApp.name.toLowerCase()}#header`}>
                      <a title="More Details">
                        <i className="mx-2">
                          <UilLink />
                        </i>
                        More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
