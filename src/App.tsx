import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MyWork from "./pages/MyWork";
import Contact from "./pages/Contact";
import ReactGA from "react-ga";
import { useEffect } from "react";

ReactGA.initialize("UA-231872780-1");

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
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
