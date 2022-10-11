import { playApps, cloneGames } from "./Data";
import { UilLink } from "@iconscout/react-unicons";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
function Portfolio() {
  const resultAll = [...playApps, ...cloneGames];
  const [result, setResult] = useState(resultAll);
  const router = useRouter();
  let filters = ["All"];
  resultAll.map((item) => {
    filters.push(item.type);
  });
  filters = [...new Set(filters)];

  useEffect(() => {
    document
      .querySelector("#portfolio-flters li:first-child")
      .classList.add("filter-active");
  }, []);

  const filterFunc = (e) => {
    e.preventDefault();

    setResult(
      e.target.innerHTML === "All"
        ? resultAll
        : e.target.innerHTML === "Mobile Game / App"
        ? [...playApps]
        : e.target.innerHTML === "Clone Game"
        ? [...cloneGames]
        : null
    );
    document.querySelectorAll("#portfolio-flters li").forEach((filter) => {
      filter.classList.remove("filter-active");
    });
    e.target.classList.add("filter-active");
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              {filters.map((filter, i) => (
                <li className="mx-1" key={i} onClick={filterFunc}>
                  {filter}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {result.map((app, i) => (
            <div key={i} className="col-lg-3 col-6  portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src={app.product_info.thumbnail.replace("s64", "s512")}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>{app.product_info.title}</h4>
                  <p>{app.type}</p>
                  <div className="portfolio-links">
                    <a
                      onClick={() => router.push(`/project/${app.name}`)}
                      title="More Details"
                    >
                      <i className="mx-2">
                        <UilLink />
                      </i>
                      More
                    </a>
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

export default Portfolio;
