import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState(() => {
    try {
      const item = window.localStorage.getItem('apex_cart');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('apex_cart', JSON.stringify(cart));
    } catch (error) {
      console.error(error);
    }
  }, [cart]);

  const toggleCart = (carId) => {
    setCart((prev) => 
      prev.includes(carId) 
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  const isInCart = (carId) => cart.includes(carId);

  return { cart, toggleCart, isInCart };
};
