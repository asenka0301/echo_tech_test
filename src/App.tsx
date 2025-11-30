import Header from "./components/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import MobileBottomNav from "./components/MobileBottomNav";

function App() {
  return (
    <div className="min-h-screen bg-bg text-text mt-3.5 sm:mt-5">
      <div className="mx-auto max-w-[1700px] px-5 lg:px-[50px]">
        <Header />
        <main className="flex flex-col mt-[63px] sx:mt-[68px] md:mt-[72px] lg:mt-[82px] xl:mt-[89px]">
          <HeroSection />
        </main>
        <MobileBottomNav />
      </div>
    </div>
  );
}

export default App;
