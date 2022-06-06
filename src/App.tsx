import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route element={<Home />} path="/*" />
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about-me" />
          <Route element={<MyWork />} path="/my-work" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
