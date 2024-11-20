import { BrowserRouter } from "react-router-dom";
import {
  Contact,
  About,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  Tech,
  StarsCanvas,
} from "./components";
import "./index.css";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        
        <div className="relative z-0 ">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
