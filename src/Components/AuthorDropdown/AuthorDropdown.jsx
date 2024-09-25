import { Dropdown } from "../Dropdown/Dropdown";

const getAuthorsFromBooks = (books) => {
  const authors = books.map((book) => book.author);
  return [...new Set(authors)];
};

export const AuthorsDropdown = ({ books, onAuthorsChange }) => {
  const authors = getAuthorsFromBooks(books);
  return (
    <Dropdown
      label="Select an Author:"
      options={authors}
      onChange={(authorsValue) => {
        console.log(authorsValue);
        onAuthorsChange(authorsValue);
      }}
    />
  );
};
