import { useState } from "react";
import {
  UilCommentsAlt,
  UilBracketsCurly,
  UilLifeRing,
  UilFolderCheck,
} from "@iconscout/react-unicons";
function About() {
  const [magic, setMagic] = useState(false);
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row no-gutters">
          <div
            className="content col-xl-5 d-flex align-items-stretch justify-content-center"
            data-aos="fade-right"
          >
            <div className="content">
              <h3>What are we doing?</h3>
              <p>
                We make suitable projects according to your wishes. Some people
                say we do magic. They are not kidding we really do magic. <br />
              </p>
              <div className="d-flex justify-content-around align-items-center">
                <h2 className="d-inline">Abracadabra!</h2>
                <h2 className="d-inline" style={{ fontSize: "4rem" }}>
                  🪄
                </h2>
                <h2
                  className="d-inline"
                  style={{ fontSize: "4rem" }}
                  id="magic"
                  onMouseEnter={() => {
                    setMagic(true);
                  }}
                  onMouseLeave={() => {
                    setMagic(false);
                  }}
                >
                  {!magic && "🎩"} {magic && "🐰"}
                </h2>
              </div>
            </div>
          </div>
          <div
            className="col-xl-7 d-flex align-items-stretch"
            data-aos="fade-left"
          >
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i>
                    <UilFolderCheck />
                  </i>
                  <h4>Project based work</h4>
                  <p>
                    Our priority is your project. We do our work as quickly as
                    possible.
                  </p>
                </div>
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i>
                    <UilBracketsCurly />
                  </i>
                  <h4>Current Technologies</h4>
                  <p>
                    We use the most up-to-date structures and frameworks for
                    your systems.
                  </p>
                </div>
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i>
                    <UilCommentsAlt />
                  </i>
                  <h4>Continuous communication</h4>
                  <p>You can contact us directly during the process.</p>
                </div>
                <div
                  className="col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i>
                    <UilLifeRing />
                  </i>
                  <h4>Post-project support</h4>
                  <p>
                    We provide support after your project and accept your
                    revisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
