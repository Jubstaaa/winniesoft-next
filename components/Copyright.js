import Link from "next/link";
import Socials from "./Socials";

function Copyright() {
  return (
    <div className="container d-md-flex py-4 align-items-center">
      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Winniesoft</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          <Link href={"/privacy-policy"}>
            <a>Privacy Policy</a>
          </Link>
        </div>
      </div>
      <Socials />
    </div>
  );
}

export default Copyright;
