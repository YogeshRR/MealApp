import { createContext } from "react";

const FavoritesContext = createContext({
  id: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

function FavoritesContextProvider({ children }) {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}
export default FavoritesContextProvider;
