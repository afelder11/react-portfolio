import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import WeatherApp from "./weatherapp/src/components/Weather"; // Import Weather component from the weatherapp folder

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />

          {/* Define Routes */}
          <Routes>
            {/* Home Route - This includes all your main sections */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Technologies />
                  <Experience />
                  <Projects />
                  <Certifications />
                  <Education />
                  <Contact />
                </>
              }
            />

            {/* Weather App Route */}
            <Route path="/weatherapp" element={<WeatherApp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
