import "./App.css";
import About from "./components/About";
import FeaturedMenu from "./components/FeaturedMenu";
import Hero from "./components/Hero";
import MenuCard from "./components/MenuCard";
import { menuItems } from "./data/menuItems";

const App = () => {
  return (
    <main className="app">
      <Hero />

      <FeaturedMenu />

      <About />
    </main>
  );
};

export default App;
