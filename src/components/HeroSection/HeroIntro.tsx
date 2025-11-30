import type { FC, JSX } from "react";
import HeroSlider from "./HeroSlider";

const HeroIntro: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col mt-[57px] mb-20 text-sm md:text-base">
      <div className="flex flex-col sx:flex-row gap-12">
        <div className="flex flex-col gap-2.5 sx:flex-1">
          <div
            className="
              relative 
              w-full 
              h-[200px]
              sx:[177px]       
              md:h-[280px]
              lg:h-[300px]
              xl:h-[280px]
              rounded-[15px]
              overflow-hidden"
          >
            <video
              playsInline
              muted
              controls
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://ansaradev.ru/ecotech/bann1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="flex flex-col justify-start gap-3.5">
            <ul className="flex flex-col">
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
              className="flex items-center font-semibold text-primary"
            >
              <span>Подробнее про выставочные площадки</span>
              <img src="images/chevron-right.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 sx:flex-1">
          <div
            className="
              relative 
              w-full 
              h-[200px]
              sx:[177px]       
              md:h-[280px]
              lg:h-[300px]
              xl:h-[280px]
              rounded-[15px]
              overflow-hidden"
          >
            <video
              playsInline
              muted
              controls
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://ansaradev.ru/ecotech/les3.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="flex flex-col justify-start gap-3.5">
            <ul className="flex flex-col">
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
      <HeroSlider />
    </div>
  );
};

export default HeroIntro;
