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
    <div className="relative w-full sx:order-1">
      <span className="absolute top-2.5 left-2.5 sx:top-5 sx:left-5 inline-block px-2.5 py-1 text-text font-medium bg-bg rounded-[87px] z-10">
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
              <div className="w-full h-[200px] sm:h-[390px] lg:h-[300px] xl:h-[390px] rounded-[15px] overflow-hidden">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="sm:absolute top-80 left-39.25 lg:top-60 xl:top-80 flex flex-col gap-1.5 sx:gap-0.75">
                <p className="text-base sm:text-lg font-medium text-text/90 sm:text-bg/90">
                  {title}
                </p>
                <span className="flex items-center gap-2">
                  <img
                    src="/images/square.svg"
                    className="block w-4 h-3.5 min-[680px]:brightness-0 min-[680px]:invert"
                    alt="Площадь"
                  />
                  <span className="font-medium sm:text-bg/90">
                    {square} м<sup>2</sup>
                  </span>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-37.5 sm:top-80 lg:top-60 xl:top-80 left-2.5 sm:left-5 flex gap-2.5 z-1">
        <button
          className="flex justify-center items-center w-10 h-10 sm:w-12.5 sm:h-12.5 bg-primary rounded-full"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img
            src="images/arrow-left.svg"
            className="w-4.5 h-4.5"
            alt="Стрелка влево"
          />
        </button>
        <button
          className="flex justify-center items-center w-10 h-10 sm:w-12.5 sm:h-12.5 bg-primary rounded-full"
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
