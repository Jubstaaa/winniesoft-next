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
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row align-items-center justify-content-center">
          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon-box">
              <div className="icon">
                <UilPlayCircle />
              </div>
              <h4 className="title">
                <a href="#portfolio">Lorem Ipsum</a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon-box">
              <div className="icon">
                <UilMobileAndroid />
              </div>
              <h4 className="title">
                <a href="#portfolio">Sed ut perspiciatis</a>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon-box">
              <div className="icon">
                <UilBrowser />
              </div>
              <h4 className="title">
                <a href="#portfolio">Magni Dolores</a>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
