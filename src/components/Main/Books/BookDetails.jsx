import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../../Utilitis";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();

  const bookDetail = data.find((detail) => detail.bookId === parseInt(bookId));
  const {
    image,
    tags,
    bookName,
    author,
    category,
    review,
    publisher,
    yearOfPublishing,
    totalPages,
  } = bookDetail;

  return (
    <div className="font-mono lg:flex justify-center gap-14 my-20">
      <div className="lg:w-2/5 bg-base-200 rounded-xl flex items-center p-10">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="space-y-5 lg:w-1/2 flex flex-col justify-between">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <p>
          By: <span className="font-semibold">{author}</span>
        </p>
        <div className="font-medium py-4 border-dashed border-y">
          <p className="text-lg">{category}</p>
        </div>
        <p>
          <span className="font-bold text-lg">Review:</span>
          {review}{" "}
        </p>
        <p>
          Tags:{" "}
          {tags.map((tag, i) => (
            <span
              className="font-semibold text-green-500 mr-4 bg-slate-100 py-1 px-4 rounded-2xl"
              key={i}
            >
              #{tag}
            </span>
          ))}
        </p>

        <div className="py-4 border-t border-dashed">
          <table className="border-separate border-spacing-x-20 text-start">
            <tbody>
              <tr>
                <td>Number of Pages: </td>
                <td className="font-semibold">{totalPages}</td>
              </tr>
              <tr>
                <td>Publisher: </td>
                <td className="font-semibold">{publisher}</td>
              </tr>
              <tr>
                <td>Year of Publishing: </td>
                <td className="font-semibold">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating: </td>
                <td className="rating">
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-amber-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-amber-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-amber-500"
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-amber-500"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-4"
                    className="mask mask-star-2 bg-amber-500"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-x-4">
          <button onClick={()=>addToStoreReadList(bookId)} className="btn border border-gray-400">Read</button>
          <button className="btn btn-info">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
