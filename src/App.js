// import { Route, Routes } from "react-router";
// import About from "./components/About";
import { HeroSection,TopBar,Header } from "./components";

function App() {
  return (
    <div className="flex flex-col gap-y-7">
      <TopBar />
      <Header />
      <HeroSection/>
      {/* <Routes>
        <Route path="/about" element={<About />} />
      </Routes> */}
    </div>
  );
}

export default App;
