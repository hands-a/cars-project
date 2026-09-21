import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const item = window.localStorage.getItem('cars_favorites');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('cars_favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error(error);
    }
  }, [favorites]);

  const toggleFavorite = (carId) => {
    setFavorites(prev => 
      prev.includes(carId) 
        ? prev.filter(id => id !== carId)
        : [...prev, carId]
    );
  };

  const isFavorite = (carId) => favorites.includes(carId);

  return { favorites, toggleFavorite, isFavorite };
};
