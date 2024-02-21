import { createContext, useState } from "react";

const FavoritesContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealId, setFavoriteMealId] = useState([]);
  function addFavorite(id) {
    setFavoriteMealId((curFavMealId) => [...curFavMealId, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealId((curFavMealId) =>
      curFavMealId.filter((mealId) => mealId !== id)
    );
  }
  const value = {
    ids: favoriteMealId,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
