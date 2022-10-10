import Header from "./Header";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { playApps } from "./Data";
function Project(props) {
  const project = playApps.find(({ name }) => name == props.name);
  return (
    <div>
      <Header />
      <main id="main">
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
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
                    {console.log(project)}
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
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: Web design
                    </li>
                    <li>
                      <strong>Client</strong>: ASU Company
                    </li>
                    <li>
                      <strong>Project date</strong>: 01 March, 2020
                    </li>
                    <li>
                      <strong>Project URL</strong>:{" "}
                      <a href="#">www.example.com</a>
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>This is an example of portfolio detail</h2>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                    itaque inventore commodi labore quia quia. Exercitationem
                    repudiandae officiis neque suscipit non officia eaque itaque
                    enim. Voluptatem officia accusantium nesciunt est omnis
                    tempora consectetur dignissimos. Sequi nulla at esse enim
                    cum deserunt eius.
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
