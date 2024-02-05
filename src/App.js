import { Route, Routes } from "react-router";
import { TopBar, Header, Home, About, Footer } from "./components";

function App() {
  return (
    <div className="flex flex-col">
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
