import Book from "../Book/Book";

export default function BookShelf(props) {
  const books = [];
  let title;

  switch (props.storeKey) {
    case "current":
      title = "Currently Reading";
      break;
    case "want":
      title = "Want To Read";
      break;
    case "read":
      title = "Read";
      break;
    default:
      return;
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <Book></Book>
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 188,
                    backgroundImage:
                      'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">Ender's Game</div>
              <div className="book-authors">Orson Scott Card</div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
