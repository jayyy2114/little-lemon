import heroImage from "./image/food.jpg";

function Main() {
  return (
    <main>
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
    </main>
  );
}

export default Main;
