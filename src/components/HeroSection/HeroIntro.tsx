import type { FC, JSX } from "react";
import HeroSlider from "./HeroSlider";
import HeroVideos from "./HeroVideos";

const HeroIntro: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row gap-14.5 sx:gap-5 lg:gap-6 xl:gap-10 mt-[59px] md:mt-[72px] lg:mt-[82px] xl:mt-[103px] text-sm md:text-base">
      <HeroVideos />
      <div className="lg:basis-[37.7%] lg:min-w-[450px] lg:max-w-[640px]">
        <HeroSlider />
      </div>
    </div>
  );
};

export default HeroIntro;
