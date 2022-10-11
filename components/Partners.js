import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import Image from "next/image";
function Partners() {
  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">
        <div className="row" style={{ height: "100px" }}>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1400: {
                slidesPerView: 6,
              },
            }}
            spaceBetween={50}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <Image
                src="/assets/img/partners/android.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/bootstrap.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/cp.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/cs.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/css.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/dart.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/firebase.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/flutter.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/git.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/html.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/js.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/nextjs.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/react.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/redux.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/tailwind.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/unity.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/img/partners/vercel.png"
                layout="fill"
                objectFit="contain"
              />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Partners;
