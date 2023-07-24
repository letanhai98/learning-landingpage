import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Plan from "./components/Plan";
import Weprovide from "./components/Weprovide";
import Network from "./components/Network";
import Customer from "./components/Customer";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="App">
      <Header />
      <Hero />
      <Weprovide />
      <div className="app2">
        <Plan />
        <Network />
      </div>
      <Customer />
      <Footer />
    </main>
  );
}

export default App;
