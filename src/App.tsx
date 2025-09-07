import Header from "./components/Header";
import Home from "./components/Home";
import Brand from "./components/Brand";
import "./App.css";
import TestimonialSlider from "./components/TestimonialSlider";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Home />
        <Brand />
        <TestimonialSlider />
      </div>
    </>
  );
}

export default App;
