import type { FC, JSX } from "react";
import HeroContent from "./HeroContent";
import HeroIntro from "./HeroIntro";

const HeroSection: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <HeroContent />
      <HeroIntro />
    </div>
  );
};

export default HeroSection;
