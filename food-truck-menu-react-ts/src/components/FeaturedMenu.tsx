import "./FeaturedMenu.css";
import { menuItems } from "../data/menuItems";
import MenuCard from "./MenuCard";

const FeaturedMenu = () => {
  return (
    <section className="menu" id="menu">
      <div className="section-heading">
        <p className="section-heading__eyebrow">Featured Menu</p>
        <h2>Street food favorites with late-night energy.</h2>
        <p>
          A small rotating menu made for fast service, bold flavor, and fresh
          ingredients from the truck window.
        </p>
      </div>

      <div className="menu__grid">
        {menuItems.map((item) => {
          return (
            <MenuCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              tag={item.tag}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedMenu;
