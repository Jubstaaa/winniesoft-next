import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container d-flex flex-column align-items-center justify-content-center"
          data-aos="fade-up"
        >
          <TypeAnimation
            sequence={[
              "We Make Original Things",
              2000,
              "We Make Fun Things",
              2000,
              "We Make Creative Things",
              2000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "3em" }}
          />
          <h2>We are team of talented developers making nice softwares.</h2>
          <a href="#about" className="btn-get-started ">
            Get Started
          </a>
          <img
            src="assets/img/hero-img.png"
            className="img-fluid hero-img"
            alt="Winniesoft Game Development,Mobile App Development,Web Development"
            data-aos="zoom-in"
            data-aos-delay="150"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
