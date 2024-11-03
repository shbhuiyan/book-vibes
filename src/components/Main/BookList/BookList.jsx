import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreReadList } from "../../../Utilitis";
import ReadBook from "./readBook";

const BookList = () => {
  const [readLists, setReadLists] = useState([])
  const data = useLoaderData();

  // const { image, tags, bookName, author, category, rating, bookId } = readLists;

  useEffect(()=>{
    const markAsReadList = getStoreReadList();
    
    const markAsReadListInt = markAsReadList.map(id => parseInt(id))

    const readBookList = data.filter(book => markAsReadListInt.includes(book.bookId))
    // console.log(readBookList);
    setReadLists(readBookList)
  },[data])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 my-20 gap-20">
      {
        readLists.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
      }
    </div>
  );
};

export default BookList;