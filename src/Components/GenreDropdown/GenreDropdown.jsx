import { Dropdown } from "../Dropdown/Dropdown";

const getGenresFromBooks = (books) => {
  const genres = books.map((book) => book.genre);

  return [...new Set(genres)];
};

export const GenreDropdown = ({ books, onGenreChange }) => {
  const genres = getGenresFromBooks(books);
  return (
    <div>
      <Dropdown
        label="Select a Genre:"
        options={genres}
        onChange={(param1, param2, param3) => {
          console.log("genre Dropdown.jsx", param1, param2, param3);
          onGenreChange(param1);
        }}
      />
    </div>
  );
};
