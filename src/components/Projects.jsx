import { Swiper, SwiperSlide } from "swiper/react";
import ButtonLink from "./ButtonLink";

export default function Projects() {
  return (
    <section id="Projects">
      <h2 className="title">My Work</h2>
      <Swiper grabCursor={true} centeredSlides={true} slidesPerView={"auto"}>
        {/* Puxar de uma API */}
        <SwiperSlide>
          <img src="https://styled-components.com/screenshots/thumbnails/gizmodo.com.jpg" alt="" />
          <div className="text-content">
            <h3>Name Projeto</h3>
            <div>
              <ButtonLink btnClass="primary" linkBtn="#">
                Link Projeto
              </ButtonLink>
              <ButtonLink btnClass="secondary" linkBtn="#">
                Link github
              </ButtonLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
