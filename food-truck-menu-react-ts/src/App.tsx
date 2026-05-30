import './App.css';

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
    </main>
  );
};

export default App;
