import "./App.css";
import About from "./components/About";
import FeaturedMenu from "./components/FeaturedMenu";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TypeScriptPractice from "./components/TypeScriptPractice";


const App = () => {
  return (
    <main className="app">

      <TypeScriptPractice />

      <Navbar />

      <Hero />

      <FeaturedMenu />

      <About />
    </main>
  );
};

export default App;
