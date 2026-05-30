import './App.css';
import MenuCard from './components/MenuCard';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Fire-Grilled Street Tacos',
    description:
      'Three warm corn tortillas loaded with seasoned steak, lime crema, cilantro, and smoky salsa.',
    price: '$11',
    image:
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Loaded Night Market Fries',
    description:
      'Crispy fries topped with queso, spicy chicken, pico, jalapeños, and our house sauce.',
    price: '$9',
    image:
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80',
    tag: 'Shareable',
  },
  {
    id: 3,
    name: 'Smash Burger Slider Duo',
    description:
      'Two juicy smash sliders with melted cheddar, pickles, onions, and roasted garlic aioli.',
    price: '$12',
    image:
      'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80',
    tag: 'New',
  },
];

const App = () => {
  return (
    <main className="app">
      <section className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">
            Street Food • Late Night • Fresh Flavor
          </p>
          <h1>Midnight Bites Food Truck</h1>
          <p className="hero__text">
            Bold street food served fresh from the truck, made for night
            markets, weekend cravings, and quick lunches with serious flavor.
          </p>

          <div className="hero__actions">
            <a href="#menu" className="button button--primary">
              View Menu
            </a>
            <a href="#location" className="button button--secondary">
              Find the Truck
            </a>
          </div>
        </div>

        <div className="hero__image-card">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80"
            alt="Fresh pizza with melted cheese and toppings"
          />
        </div>
      </section>

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
    </main>
  );
};

export default App;
