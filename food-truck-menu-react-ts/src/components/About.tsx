import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="section-heading">
          <p className="section-heading__eyebrow">About the Truck</p>
          <h2>Built for quick bites, bold flavor, and late-night cravings.</h2>
          <p>
            Midnight Bites is a fictional street food truck serving a rotating
            menu of fresh tacos, loaded fries, sliders, and market-inspired
            specials.
          </p>
        </div>

        <p className="about__text">
          Our menu is small on purpose. Every item is made to be fast,
          flavorful, and easy to enjoy while walking through a night market,
          grabbing lunch, or meeting friends after work.
        </p>
      </div>

      <div className="about__stats">

        <div className="stat-card">
          <span>3</span>
          <p>Featured menu items</p>
        </div>

        <div className="stat-card">
          <span>15 min</span>
          <p>Average service window</p>
        </div>

        <div className="stat-card">
          <span>100%</span>
          <p>Fictional portfolio brand</p>
        </div>
        
      </div>
    </section>
  );
};

export default About;
