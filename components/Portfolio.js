import { playSearch } from "./Data";
import { UilLink } from "@iconscout/react-unicons";
import { useRouter } from "next/router";

function Portfolio() {
  const router = useRouter();
  const makeUrl = (string) => {
    return string
      .toLowerCase()
      .replace(/ğ/gim, "g")
      .replace(/ü/gim, "u")
      .replace(/ş/gim, "s")
      .replace(/ı/gim, "i")
      .replace(/ö/gim, "o")
      .replace(/ç/gim, "c")
      .replace(/ /gim, "-");
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
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {playSearch[0].organic_results[0].items.map((app, i) => (
            <div key={i} className="col-lg-4 col-6  portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img
                  src={app.thumbnail.replace("s64", "s512")}
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>{app.title}</h4>
                  <p>Mobile Game / App</p>
                  <div className="portfolio-links">
                    <a
                      onClick={() =>
                        router.push(`/project/${makeUrl(app.title)}`)
                      }
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
