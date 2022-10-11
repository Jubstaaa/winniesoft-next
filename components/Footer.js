import {
  UilTwitter,
  UilFacebook,
  UilInstagramAlt,
  UilGithub,
  UilGooglePlay,
  UilAngleRightB,
} from "@iconscout/react-unicons";
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

            {/* <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div> */}

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
                  <a href="#services">Mobile Development</a>
                </li>
                <li>
                  <i>
                    {" "}
                    <UilAngleRightB />
                  </i>{" "}
                  <a href="#services">Web Development</a>
                </li>
                {/* <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Script Bots</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>{" "}
                  <a href="#">Graphic Design</a>
                </li> */}
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Newsletter</h4>
              <p>Stay in tune with our latest projects.</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4 align-items-center">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Winniesoft</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a
            href="https://twitter.com/WinnieSoftware"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <UilTwitter></UilTwitter>
          </a>
          <a
            href="https://www.instagram.com/Winniesoftware/"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <UilInstagramAlt></UilInstagramAlt>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100083122255613"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <UilFacebook></UilFacebook>
          </a>
          <a
            href="https://github.com/WinnieSoft"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <UilGithub></UilGithub>
          </a>
          <a
            href="https://play.google.com/store/apps/dev?id=8459739707142059323&hl=tr&gl=US"
            target="_blank"
            rel="nofollow noreferrer"
          >
            <UilGooglePlay></UilGooglePlay>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
