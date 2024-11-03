import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, tags, bookName, author, category, rating, bookId } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="p-4 border rounded-xl space-y-4 hover:scale-105 duration-500">
        <div className="w-full bg-base-200 rounded-xl p-8 flex">
          <img className="mx-auto h-44" src={image} alt="" />
        </div>
        <div>
          {tags.map((tag, i) => (
            <span
              className="text-blue-500 font-medium bg-base-200 py-2 px-4 rounded-2xl mr-4"
              key={i}
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-2xl font-bold">{bookName}</h1>
        <p>By: {author}</p>
        <div className="flex justify-between items-center border-t border-dashed">
          <p className="mt-3">{category}</p>
          <p className="mt-3 text-xl font-semibold">{rating} ⭐</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
