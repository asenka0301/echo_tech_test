import Header from "./components/Header";
import MobileBottomNav from "./components/MobileBottomNav";

function App() {
  return (
    <div className="min-h-screen bg-bg text-text mt-3.5 sm:mt-5">
      <div className="mx-auto max-w-[1700px] px-5 lg:px-[50px]">
        <Header />
        <MobileBottomNav />
      </div>
    </div>
  );
}

export default App;
