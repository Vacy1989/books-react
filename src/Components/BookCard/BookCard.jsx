import { Images } from "../Images/Images";
import style from "./BookCard.module.scss";
export const BookCard = ({ url, title, author, genre }) => {
  return (
    <div className={style.container}>
      <div>
        <Images url={url} alt="Book Cover" />
        <div className={style["books-div"]}>
          <span className={style["title"]}>Title: {title}</span>
          <span className={style["author"]}>Author: {author}</span>
          <span className={style["genre"]}>Genre: {genre}</span>
        </div>
      </div>
    </div>
  );
};
