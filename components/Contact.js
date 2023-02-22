import {
  UilMapMarker,
  UilEnvelope,
  UilPhoneVolume,
} from "@iconscout/react-unicons";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i>
                    <UilMapMarker />
                  </i>

                  <h3>Our Address</h3>
                  <p>Not Yet 😔</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i>
                    <UilEnvelope />
                  </i>
                  <h3>Email Us</h3>
                  <p>info@winniesoft.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i>
                    <UilPhoneVolume />
                  </i>
                  <h3>Call Us</h3>
                  <p>Not Yet 😔</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
