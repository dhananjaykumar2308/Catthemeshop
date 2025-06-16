import React from "react";
import "./styles.css";

const products = [
  {
    name: "Sleepy Cat Bedsheet",
    price: "₹799",
    image: "https://picsum.photos/seed/bedsheet/600/400",
    description: "Soft cotton bedsheet with adorable sleepy cats print.",
  },
  {
    name: "Grumpy Cat Mug",
    price: "₹349",
    image: "https://picsum.photos/seed/grumpycat/600/400",
    description: "Ceramic mug with a grumpy cat face — purrfect for mornings.",
  },
  {
    name: "Cat Paw Cushion",
    price: "₹599",
    image: "https://picsum.photos/seed/catpaw/600/400",
    description: "Cute paw-shaped cushion for your cozy corners.",
  },
];

export default function App() {
  return (
    <div className="grid">
      {products.map((p, i) => (
        <div key={i} className="card">
          <img src={p.image} alt={p.name} />
          <div className="body">
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <div className="footer">
              <span>{p.price}</span>
              <button>🛒 Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
