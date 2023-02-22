import { team } from "./Data";
import {
  UilInstagram,
  UilTwitterAlt,
  UilLinkedin,
  UilGithub,
} from "@iconscout/react-unicons";
function Team() {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Team</h2>
          <p>
            Meet our team who are experienced in their fields and constantly
            improve themselves.
          </p>
        </div>

        <div className="row justify-content-center align-items-center">
          {team.map((people, i) => (
            <div
              key={i}
              className="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="member">
                <img src={people.image} className="img-fluid" alt="" />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>{people.name}</h4>
                    <span>{people.title}</span>
                  </div>
                  <div className="social">
                    {people.socials.instagram && (
                      <a
                        href={people.socials.instagram}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        <i>
                          <UilInstagram />
                        </i>
                      </a>
                    )}
                    {people.socials.twitter && (
                      <a
                        href={people.socials.twitter}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        <i>
                          <UilTwitterAlt />
                        </i>
                      </a>
                    )}
                    {people.socials.linkedin && (
                      <a
                        href={people.socials.linkedin}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        <i>
                          <UilLinkedin />
                        </i>
                      </a>
                    )}
                    {people.socials.github && (
                      <a
                        href={people.socials.github}
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        <i>
                          <UilGithub />
                        </i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
