import { useState } from "react";
import data from "./components/data";

let allCategories = ["all", ...new Set(data.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menu, setMenu] = useState(data);

  const handleClick = (category) => {
    console.log(category);
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newMenu = data.filter((item) => {
      return item.category === category;
    });
    setMenu(newMenu);
  };

  return (
    <>
      <header className="heading-container">
        <h1 className="heading">Our Menu</h1>
        <div className="underline"></div>
      </header>
      <nav className="nav-bar">
        {allCategories.map((category) => {
          return (
            <div className="btn-container">
              <button
                className="category-btn"
                onClick={() => handleClick(category)}
              >
                {category}
              </button>
            </div>
          );
        })}
      </nav>
      <main className="main-container">
        {menu.map((item) => {
          const { id, title, img, price, desc } = item;
          return (
            <article className="item" key={id}>
              <img src={img} alt={title} />
              <div className="item-body">
                <div className="title-container">
                  <h5 className="title">{title}</h5>
                  <p className="price">${price}</p>
                </div>
                <div className="line"></div>
                <p className="desc">{desc}</p>
              </div>
            </article>
          );
        })}
      </main>
    </>
  );
}

export default App;
