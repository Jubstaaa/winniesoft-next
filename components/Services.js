import {
  UilPlayCircle,
  UilMobileAndroid,
  UilBrowser,
} from "@iconscout/react-unicons";
function Services() {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            We are working hard to give you best service. We work with the most
            up-to-date technologies and best solution partners.
          </p>
        </div>

        <div className="row align-items-center justify-content-center">
          <div
            className="col-md-6 col-lg-3 col-12 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                <UilPlayCircle />
              </div>
              <h4 className="title">
                <a href="#portfolio">Game Development</a>
              </h4>
              <p className="description">
                We develop games suitable for every platform according to your
                wishes.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 col-12 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <UilMobileAndroid />
              </div>
              <h4 className="title">
                <a href="#portfolio">Mobile App Development</a>
              </h4>
              <p className="description">
                We develop mobile applications according to your wishes
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 col-12 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <UilBrowser />
              </div>
              <h4 className="title">
                <a href="#portfolio">Web Development</a>
              </h4>
              <p className="description">
                We make fast, responsive, dynamic web apps and sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
