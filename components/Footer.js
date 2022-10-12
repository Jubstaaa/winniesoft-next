import { UilAngleRightB } from "@iconscout/react-unicons";
import Copyright from "./Copyright";
import SubscribeForm from "./SubscribeForm";
function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 footer-contact">
              <h3>Winniesoft</h3>
              <p>
                <strong>Address:</strong>
                Not Yet 😔
                <br />
                <strong>Phone:</strong> Not Yet 😔
                <br />
                <strong>Email:</strong> info@winniesoft.com
                <br />
              </p>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i>
                    {" "}
                    <UilAngleRightB />
                  </i>{" "}
                  <a href="#services">Game Development</a>
                </li>
                <li>
                  <i>
                    {" "}
                    <UilAngleRightB />
                  </i>{" "}
                  <a href="#services">Mobile App Development</a>
                </li>
                <li>
                  <i>
                    {" "}
                    <UilAngleRightB />
                  </i>{" "}
                  <a href="#services">Web Development</a>
                </li>
              </ul>
            </div>

            <SubscribeForm />
          </div>
        </div>
      </div>

      <Copyright />
    </footer>
  );
}

export default Footer;
