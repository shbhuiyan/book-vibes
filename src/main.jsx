import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import ErrorPage from "./components/Error_Page/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import BookList from "./components/Main/BookList/BookList.jsx";
import Dashboard from "./components/Main/Dashboard/Dashboard.jsx";
import BookDetails from "./components/Main/Books/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/books/:bookId",
        loader:()=> fetch(`/booksData.json`),
        element:<BookDetails></BookDetails>
      },
      {
        path: "/booklist",
        loader:()=> fetch(`/booksData.json`),
        element: <BookList></BookList>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
