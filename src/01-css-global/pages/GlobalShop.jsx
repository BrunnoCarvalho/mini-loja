import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/ProductCard/ProductCard";
import Skeleton from "../components/Skeleton/Skeleton";

import { products } from "../data/products";

export default function Home() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleToggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleAddToCart = () => setCartCount(prev => prev + 1);

  useEffect(() => {
    if (theme === "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");

    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <>
      <Navbar 
        cartCount={cartCount} 
        theme={theme} 
        onToggleTheme={handleToggleTheme} 
      />
      <main>
        <div className="grid">
          {loading
            ? products.map(p => <Skeleton key={p.id} height="300px" />)
            : products.map(p => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  onAddToCart={handleAddToCart} 
                />
              ))
          }
        </div>
      </main>
    </>
  );
}
