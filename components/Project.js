import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { playApps, cloneGames } from "./Data";
import Game from "./Game";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";

function Project(props) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
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
                      <Image
                        width={450}
                        height={450}
                        src={project.product_info.thumbnail.replace(
                          "s64",
                          "s512"
                        )}
                        alt={`${project.product_info.title} Project Thumbnail`}
                        loading="lazy"
                      />
                      {project.media.images.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => {
                            setPhotoIndex(i);
                            setIsOpen(true);
                          }}
                          className={"lighbox-image"}
                        >
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
                  <div
                    className="game m-auto position-relative "
                    style={
                      project.display == "vertical"
                        ? {
                            height: "528px",
                            width: "297px",
                          }
                        : {
                            height: "100% !important",
                            width: "auto !important",
                          }
                    }
                  >
                    <Game name={props.name} display={project.display} />
                  </div>
                )}
              </div>

              {isOpen && (
                <Lightbox
                  mainSrc={project.media.images[photoIndex]
                    .replace("w526", "w900")
                    .replace("h296", "h1600")}
                  nextSrc={
                    project.media.images[
                      (photoIndex + 1) % project.media.images.length
                    ]
                  }
                  prevSrc={
                    project.media.images[
                      (photoIndex + project.media.images.length - 1) %
                        project.media.images.length
                    ]
                  }
                  onCloseRequest={() => setIsOpen(false)}
                  onMovePrevRequest={() =>
                    setPhotoIndex(
                      (photoIndex + project.media.images.length - 1) %
                        project.media.images.length
                    )
                  }
                  onMoveNextRequest={() =>
                    setPhotoIndex(
                      (photoIndex + 1) % project.media.images.length
                    )
                  }
                />
              )}

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
                  {project.about_this_game.warning && (
                    <div class="alert alert-warning" role="alert">
                      {project.about_this_game.warning}
                    </div>
                  )}

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
