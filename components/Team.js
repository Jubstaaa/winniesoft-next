import { team } from "./Data";
import {
  UilInstagram,
  UilTwitterAlt,
  UilLinkedin,
  UilGithub,
} from "@iconscout/react-unicons";
function Team() {
  return (
    <section id="team" class="team">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Team</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row justify-content-center align-items-center">
          {team.map((people, i) => (
            <div
              key={i}
              class="col-xl-3 col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member">
                <img src={people.image} class="img-fluid" alt="" />
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>{people.name}</h4>
                    <span>{people.title}</span>
                  </div>
                  <div class="social">
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
