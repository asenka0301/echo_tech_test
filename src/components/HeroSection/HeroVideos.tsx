import type { FC, JSX } from "react";

const HeroVideos: FC = (): JSX.Element => {
  return (
    <div className="flex w-full flex-col lg:basis-[60.46%] sx:flex-row sx:order-2 gap-12 sx:gap-5.5 md:gap-5 lg:gap-6 xl:gap-10">
      <div className="flex flex-col gap-2.5 sx:flex-1">
        <div className="relative w-full h-[200px] sx:h-[177px] md:h-[280px] lg:h-[200px] xl:h-[280px] rounded-[15px] overflow-hidden">
          <span className="absolute top-2.5 sx:top-4.5 md:top-5 left-2.5 sx:left-3.5 md:left-5 lg:left-4 xl:left-5 inline-block px-2.5 py-1 text-text font-medium bg-bg rounded-[87px] z-10">
            2 выставочные площадки
          </span>
          <span className="absolute top-37 sx:top-32.5 md:top-53.5 lg:top-33.5 xl:top-53.5 left-2.5 md:left-5.5 lg:left-4.5 xl:left-5 inline-block w-[251px] sx:w-[211px] xl:w-[300px] h-[42px] text-[18px] sx:text-[16px] xl:text-[20px] font-bold text-bg/90 z-10">
            Посмотрите, как выглядят наши дома вживую
          </span>
          <video
            playsInline
            muted
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            poster="images/posters/video1.png"
          >
            <source
              src="https://ansaradev.ru/ecotech/bann1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="flex flex-col justify-start gap-3.5">
          <ul className="flex flex-col text-sm">
            <li
              className="
                  relative pl-4.5
                  before:absolute before:left-0 before:top-1
                  before:h-3 before:w-3
                  before:bg-[url('images/check.svg')]
                  before:bg-no-repeat before:bg-contain"
            >
              Москва, 51-й км МКАД
            </li>
            <li
              className="
                  relative pl-4.5
                  before:absolute before:left-0 before:top-1
                  before:h-3 before:w-3
                  before:bg-[url('images/check.svg')]
                  before:bg-no-repeat before:bg-contain"
            >
              Наро-Фоминск
            </li>
          </ul>
          <a
            href="#"
            className="flex items-center font-semibold text-sm md:text-base text-primary"
          >
            <span>Подробнее про выставочные площадки</span>
            <img src="images/chevron-right.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 sx:flex-1">
        <div className="relative w-full h-[200px] xs:h-[177px] md:h-[280px] lg:h-[200px] xl:h-[280px] rounded-[15px] overflow-hidden ">
          <video
            playsInline
            muted
            preload="metadata"
            poster="images/posters/video2.png"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://ansaradev.ru/ecotech/les3.mp4"
              type="video/mp4"
            />
          </video>

          <div
            className="pointer-events-none absolute inset-0 z-10
               bg-[linear-gradient(90deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_46%,rgba(0,0,0,0.6)_100%)]"
          />
          <span className="absolute top-2.5 left-2.5 z-20 flex items-center gap-2.5 w-[220px] sm:w-[300px]">
            <img
              src="images/play.svg"
              className="sm:w-[38px] sm:h-[38px]"
              alt="Видео"
            />
            <span className="text-bg font-bold">
              Видео о том, как создаётся идеальный дом
            </span>
          </span>
        </div>
        <div className="flex flex-col justify-start gap-3.5">
          <ul className="flex flex-col text-sm">
            <li
              className="
                  relative pl-4.5
                  before:absolute before:left-0 before:top-1
                  before:h-3 before:w-3
                  before:bg-[url('images/check.svg')]
                  before:bg-no-repeat before:bg-contain"
            >
              Собственная лесозаготовка
            </li>
            <li
              className="
                  relative pl-4.5
                  before:absolute before:left-0 before:top-1
                  before:h-3 before:w-3
                  before:bg-[url('images/check.svg')]
                  before:bg-no-repeat before:bg-contain"
            >
              4 цеха в Архангельской области
            </li>
          </ul>
          <a
            href="#"
            className="flex items-center text-sm md:text-base font-semibold text-primary"
          >
            <span>Подробнее о нашей лесозаготовке</span>
            <img src="images/chevron-right.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroVideos;
