import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {

  const [books, setBooks] = useState([])

  useEffect(()=>{
      fetch('booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  },[])

  return (
    <div className="my-20">
      <h3 className="text-4xl font-bold w-1/5 mx-auto mb-8">Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          books.map(book => <Book key={book.bookId} book={book} ></Book>)
        }
      </div>
    </div>
  )
};

export default Books;
