import { Route, Routes } from "react-router";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import About from "./components/About";

function App() {
  return (
    <div className="flex flex-col gap-y-7">
      <TopBar />
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
