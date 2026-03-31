import greekSalad from "./image/salad.jpg";
import bruschetta from "./image/bruchetta.svg";
import lemonDessert from "./image/dessert.jpg";

function Specials() {
  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
      image: greekSalad,
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$5.99",
      description:
        "Our Bruschetta is made from the grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruschetta,
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessert,
    },
  ];
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This weeks special!</h2>
        <button className="online-menu-btn">Online Menu</button>
      </div>
      <div className="specials-cards">
        {specials.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="card-body">
              <div className="card-title">
                <span>{item.name}</span>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <a href="#">Order a delivery 🚚 </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
