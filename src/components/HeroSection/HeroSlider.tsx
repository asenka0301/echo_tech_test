import { useRef, type FC, type JSX } from "react";
import { heroSlides } from "../../config/slides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const HeroSlider: FC = (): JSX.Element => {
  const swiperRef = useRef<SwiperType>(null);
  return (
    <div className="relative w-full mt-[58px]">
      <span className="absolute top-2.5 left-2.5 inline-block px-2.5 py-1 text-text font-medium bg-bg rounded-[87px] z-10">
        Наши авторские проекты
      </span>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={16}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoHeight
        allowTouchMove={false}
        className="hero-swiper w-full overflow-visible"
      >
        {heroSlides.map(({ id, src, title, square }) => (
          <SwiperSlide key={id} className="h-auto">
            <div className="flex flex-col gap-3">
              <div className="relative w-full h-[200px] sm:h-[220px] lg:h-[260px] rounded-[15px] overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-1.5 sx:gap-0.75">
                <p className="text-base font-medium text-text/90">{title}</p>
                <span className="flex items-center gap-2">
                  <img
                    src="/images/square.svg"
                    className="block w-4 h-3.5"
                    alt="Площадь"
                  />
                  <span className="font-medium">
                    {square} м<sup>2</sup>
                  </span>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-37.5 left-2.5 flex gap-2.5 z-1">
        <button
          className="flex justify-center items-center w-10 h-10 bg-primary rounded-full"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img
            src="images/arrow-left.svg"
            className="w-4.5 h-4.5"
            alt="Стрелка влево"
          />
        </button>
        <button
          className="flex justify-center items-center w-10 h-10 bg-primary rounded-full"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img
            className="w-4.5 h-4.5"
            src="images/arrow-right.svg"
            alt="Стрелка вправо"
          />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
