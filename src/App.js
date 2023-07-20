import "./App.css";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Plan from "./components/Plan";
import Network from "./components/Network";
import Customer from "./components/Customer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Hero />
      <Main />
      <Intro />
      <Feature />
      <div className="hero-plan">
        <Plan />
        <Network />
      </div>
      <Customer />
      <div className="color-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
