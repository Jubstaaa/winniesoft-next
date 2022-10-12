import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { partners } from "./Data";
import "swiper/css";
import Image from "next/image";
function Partners() {
  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">
        <div className="row" style={{ height: "100px" }}>
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            {partners.map((partner, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={`/assets/img/partners/${partner}.png`}
                  layout="fill"
                  objectFit="contain"
                  alt={`Winniesoft ${
                    partner.charAt(0).toUpperCase() + partner.slice(1)
                  } Logo`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Partners;
