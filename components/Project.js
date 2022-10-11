import Header from "./Header";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { playApps, cloneGames } from "./Data";
import Game from "./Game";
function Project(props) {
  const project =
    playApps.find(({ name }) => name == props.name) ||
    cloneGames.find(({ name }) => name == props.name);
  return (
    <div>
      <Header />
      <main id="main">
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                {project.media ? (
                  <div className="portfolio-details-slider swiper">
                    <Carousel
                      showStatus={false}
                      showThumbs={false}
                      interval={5000}
                      width="35%"
                      dynamicHeight={true}
                      infiniteLoop={true}
                      swipeable={true}
                      useKeyboardArrows={true}
                    >
                      {project.media.images.map((item, i) => (
                        <div key={i}>
                          <img
                            src={item
                              .replace("w526", "w900")
                              .replace("h296", "h1600")}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                ) : (
                  <div className="game w-auto h-100">
                    <Game name={props.name} />
                  </div>
                )}
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: {project.categories[0].name}
                    </li>
                    <li>
                      <strong>Client</strong>:{" "}
                      <a
                        href={project.product_info.authors[0].link}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        {" "}
                        {project.product_info.authors[0].name}
                      </a>
                    </li>
                    <li>
                      <strong>Project date</strong>: {project.updated_on}
                    </li>
                    <li>
                      <strong>Project URL</strong>:
                      <a
                        href={project.product_info.offers[0].link}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        {" "}
                        Link
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>{project.product_info.title}</h2>
                  <p>
                    {project.about_this_game
                      ? project.about_this_game.snippet
                      : project.about_this_app.snippet}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Project;
