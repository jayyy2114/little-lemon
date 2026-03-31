import heroImage from "./image/food.jpg";
import Specials from "./Specials";

function Homepage() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, foucsed on
            traditonal recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Restaurant food" />
        </div>
      </section>
      <Specials />
    </>
  );
}

export default Homepage;
