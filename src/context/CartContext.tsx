import { createContext, useContext, useState } from "react";

interface Donut {
  name: string;
  img: string;
  description: string;
  price: number;
  ingredients: string[];
  qty: number;
  date: string;
  thumbsUp: number;
  thumbsDown: number;
  stripeProductId: string;
  id: string;
}

interface CartContextProps {
  cart: Donut[];
  addToCart: (donut: Donut) => void;
  removeFromCart: (donut: Donut) => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Donut[]>([]);

  const addToCart = (donut: Donut) => {
    setCart((prevCart) => [...prevCart, donut]);
  };

  const removeFromCart = (donut: Donut) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== donut.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
