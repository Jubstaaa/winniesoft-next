import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { playApps, cloneGames } from "./Data";
import Game from "./Game";
import Head from "next/head";
import Image from "next/image";
function Project(props) {
  const project =
    playApps.find(({ name }) => name == props.name) ||
    cloneGames.find(({ name }) => name == props.name);
  return (
    <div>
      <Head>
        <title>
          {project.product_info.title} | Project | Web | Mobile | Game
          Winniesoft
        </title>
        <meta
          content={
            project.about_this_game
              ? project.about_this_game.snippet
              : project.about_this_app.snippet
          }
          name="description"
        ></meta>
      </Head>
      <main id="main">
        <section id="project-details" className="project-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                {project.media ? (
                  <div className="project-details-slider swiper">
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
                          <Image
                            width={450}
                            height={800}
                            src={item
                              .replace("w526", "w900")
                              .replace("h296", "h1600")}
                            alt={`${project.product_info.title} Project Image ${
                              i + 1
                            }`}
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                ) : (
                  <div className="game w-auto w-100 h-100 position-relative ">
                    <Game name={props.name} />
                  </div>
                )}
              </div>

              <div className="col-lg-4">
                <div className="project-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: {project.categories[0].name}
                    </li>
                    <li>
                      <strong>Owner</strong>:{" "}
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
                <div className="project-description">
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
    </div>
  );
}

export default Project;
