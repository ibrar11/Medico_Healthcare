import { Route, Routes } from "react-router";
import { TopBar, Header, Home, About } from "./components";

function App() {
  return (
    <div className="flex flex-col">
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
