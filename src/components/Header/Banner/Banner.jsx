import bannerPic from "../../../assets/books.jpg"

const Banner = () => {
  return (
    <div className="hero bg-base-100 min-h-screen rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerPic}
          className="w-full rounded-lg shadow-2xl"
        />
        <div className="space-y-8">
          <h1 className="text-5xl font-mono font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
