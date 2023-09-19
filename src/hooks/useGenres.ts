// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// General Interface + Hook to hide endpoints
// Fetch data from the Server or use the data stored in genres.ts
// const useGenres = () => useData<Genre>("/genres");
const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
