import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Plan from "./components/Plan";
import Weprovide from "./components/Weprovide";
import Network from "./components/Network";
import Customer from "./components/Customer";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import UseEffect from "./components/UseEffect";
import ES6 from "./components/ES6";
import UseHook from "./components/UseHook";
import Form from "./components/Form";

function App() {
  return (
    // <main className=" flex flex-col items-center justify-center w-[100%]  max-lg:flex max-lg:justify-center">
    //   <Header />
    //   <Hero />
    //   <Weprovide />
    //   <div className="w-[100%] flex flex-col justify-center items-center bg-color5">
    //     <Plan />
    //     <Network />
    //   </div>
    //   <Customer />
    //   <div className="bg-footer w-[100%] bg-color7 flex justify-center">
    //     <Footer />
    //   </div>
    // </main>
    <div>
      <TodoList />
    </div>
    // <div>
    //   <UseEffect />
    // </div>
    // <div>
    //   <ES6 />
    // </div>
    // <div>
    //   <UseHook />
    // </div>
  );
}

export default App;
