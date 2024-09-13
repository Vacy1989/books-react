import style from "./App.module.scss";
import { Dropdown } from "./Components/Dropdown/Dropdown";
import { BookCard } from "./Components/BookCard/BookCard";
import { Images } from "./Components/Images/Images";
import { GenreDropdown } from "./Components/GenreDropdown/GenreDropdown";
import { useState } from "react";
import { AuthorsDropdown } from "./Components/AuthorDropdown/AuthorDropdown";

function App() {
  let books = [
    {
      id: 1,
      url: "https://www.hachettebookgroup.com/wp-content/uploads/2024/01/9780316258876.jpg?w=640",
      title: "Swan Song",
      author: "Elin Hilderbrand",
      genre: "Contemporary Fiction",
    },
    {
      id: 2,
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1720446357i/209439446.jpg",
      title: "Onix Storm",
      author: "Rebecca Yarros",
      genre: "Romantic Fantasy",
    },
    {
      id: 3,
      url: "https://m.media-amazon.com/images/I/51EDnDrsffL.jpg",
      title: "Not in Love",
      author: "Ali Hazelwood",
      genre: "Romance",
    },
    {
      id: 4,
      url: "https://m.media-amazon.com/images/I/514AeJm6j8L.jpg",
      title: "Leather & Lark",
      author: "Brynne Weaver",
      genre: "Romantic Fantasy",
    },
    {
      id: 5,
      url: "https://prodimage.images-bn.com/pimages/9781665966351_p0_v3_s1200x630.jpg",
      title: "Reckless",
      author: "Lauren Roberts",
      genre: "Romantic Fantasy",
    },
    {
      id: 6,
      url: "https://images.penguinrandomhouse.com/cover/9780593712641",
      title: "Good Energy",
      author: "Casey Means MD",
      genre: "Self-Help / Health",
    },
    {
      id: 7,
      url: "https://m.media-amazon.com/images/I/71VQK43EoAL._AC_UF1000,1000_QL80_.jpg",
      title: "Zodiac Academy",
      author: "Caroline Peckham",
      genre: "Romantic Fantasy",
    },
    {
      id: 8,
      url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689788358i/127305853.jpg",
      title: "The Women",
      author: "Kristin Hannah",
      genre: "Historical Fiction",
    },
    {
      id: 9,
      url: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1666574915l/61885102.jpg",
      title: "Murdle",
      author: "G. T. Karber",
      genre: "Mystery / Puzzle Book",
    },
    {
      id: 10,
      url: "https://m.media-amazon.com/images/I/71rm-Wa-XFL._SL1500_.jpg",
      title: "Skyshade",
      author: "Alex Aster",
      genre: "Fantasy",
    },
    {
      id: 11,
      url: "https://upload.wikimedia.org/wikipedia/en/6/65/You_Like_It_Darker_by_Stephen_King.jpg",
      title: "You Like It Darker",
      author: "Stephen King",
      genre: "Horror / Thriller",
    },
    {
      id: 12,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7DJYLU_CO0nA97Co9Ja3D9wutcS_dGnieQA&s",
      title: "Shameless",
      author: "Brian Tyler Cohen",
      genre: "Political Commentary / Non-Fiction",
    },
  ];
  // useState is used insted of regular variables const and let in order to force react to update or rerender onValue change

  // let selectedGenre = "";
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");

  const handleOnGenreChange = (genre) => {
    console.log("App.js", genre);
    setSelectedGenre(genre);
  };
  console.log("Hello World", selectedGenre);

  const filteredBooks = books.filter((book, index) => {
    return book.genre === selectedGenre || !selectedGenre;
  });
  console.log("Cao", filteredBooks);

  const handleOnAuthorsChange = (author) => {
    console.log(author);
    setSelectedAuthor(author);
  };
  console.log(selectedAuthor);

  const filteredAuthors = books.filter((book, index) => {
    return book.author === selectedAuthor || !selectedAuthor;
  });
  console.log(filteredAuthors);
  return (
    <div className="App">
      <h1>Select a Book Genre</h1>
      <GenreDropdown books={books} onGenreChange={handleOnGenreChange} />
      <h1>Select an Author</h1>
      <AuthorsDropdown books={books} onAuthorsChange={handleOnAuthorsChange} />
      <div className={style["books-div"]}>
        {filteredBooks.map((book, index) => {
          return (
            <BookCard
              url={book.url}
              title={book.title}
              author={book.author}
              genre={book.genre}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

// add a button next to dropdown that will clear the selection
//nauciti prosledjivanje parametra na dole//na gore
//nauciti useState
