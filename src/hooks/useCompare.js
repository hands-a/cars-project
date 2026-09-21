import { useState, useEffect } from 'react';

export const useCompare = () => {
  const [compareList, setCompareList] = useState(() => {
    try {
      const item = window.localStorage.getItem('cars_compare');
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('cars_compare', JSON.stringify(compareList));
    } catch (error) {
      console.error(error);
    }
  }, [compareList]);

  const toggleCompare = (carId) => {
    setCompareList(prev => {
      if (prev.includes(carId)) {
        return prev.filter(id => id !== carId);
      } else {
        if (prev.length >= 3) {
          alert("You can only compare up to 3 vehicles at a time.");
          return prev;
        }
        return [...prev, carId];
      }
    });
  };

  const isComparing = (carId) => compareList.includes(carId);
  const clearCompare = () => setCompareList([]);

  return { compareList, toggleCompare, isComparing, clearCompare };
};
