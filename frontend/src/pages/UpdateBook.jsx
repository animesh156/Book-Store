import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";


const UpdateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [genre, setGenre] = useState("");
 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setGenre(response.data.genre);
        setPublishYear(response.data.publishYear);
       
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. please check console");
        console.log(error);
      });
  }, [id]);

  const handleUpdateBook = () => {
    const data = {
      title,
      author,
      publishYear,
      genre,
      
    };
    setLoading(true);
    axios
      .put(`http://localhost:8080/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Updated Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
   

  
    <div className="p-4">
      <BackButton destination="/" />
      <h1 className="text-3xl my-4 text-center uppercase text-yellow-300">Update Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl  p-4 mx-auto md:w-auto sm:w-auto  lg:w-[600px] xl:w-[800px] ">
        <div className="my-4">
          <label className="text-xl mr-4 text-emerald-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 bg-red-200 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-emerald-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 bg-red-200 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-emerald-500">Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border-2 bg-red-200 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-emerald-500">Published Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 bg-red-200 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <button
          className="p-2 bg-pink-500 px-4 py-2 w-full"
          onClick={handleUpdateBook}
        >
          Save
        </button>
      </div>
    </div>
   
  );
};

export default UpdateBook;
