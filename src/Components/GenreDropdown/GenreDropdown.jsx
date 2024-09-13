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
        onChange={(value, value2, value3) => {
          console.log("genre Dropdown.jsx", value, value2, value3);
          onGenreChange(value2);
        }}
      />
    </div>
  );
};
