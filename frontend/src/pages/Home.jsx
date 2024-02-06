import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox } from "react-icons/md";
import axios from "axios";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => setShowType("table")}
        >
          Table
        </button>

        <button
          className=" bg-gradient-to-r from-cyan-400 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
   
      <div className="flex justify-between items-center">
      <h1 className="text-3xl my-8 text-green-500">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-cyan-300 text-4xl" />
        </Link>
      </div>
      {loading ? <Spinner /> : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books ={books} />)}
    </div>
  );
};

export default Home;
