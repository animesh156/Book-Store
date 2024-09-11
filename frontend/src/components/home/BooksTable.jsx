import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import {BsInfoCircle} from "react-icons/bs";
import { MdOutlineDelete} from "react-icons/md"
import propTypes from 'prop-types'

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
                <thead >
                    <tr className="text-pink-400 uppercase">
                        <th className="border border-red-400  rounded-md">No</th>

                        <th className="border border-red-400 rounded-md">Title</th>

                        <th className="border border-red-400 rounded-md max-md:hidden">Author</th>

                        <th className="border border-red-400 rounded-md">Genre</th>

                        <th className="border border-red-400 rounded-md max-md:hidden">Publish Year</th>

                        <th className="border border-red-400 rounded-md">Operations</th>

                    </tr>
                </thead>
                <tbody>
                    {books.map((book,index) => (
                        <tr key={book._id} className="h-8 font-bold dark:text-yellow-300">

                            <td className="border border-cyan-700 rounded-md text-center">
                               {index+1}
                            </td>

                            <td className="border border-cyan-700 rounded-md text-center">
                               {book.title}
                            </td>

                            <td className="border border-cyan-700 rounded-md text-center max-md:hidden">
                               {book.author}
                            </td>

                            <td className="border border-cyan-700 rounded-md text-center">
                               {book.genre}
                            </td>

                            <td className="border border-cyan-700 rounded-md text-center max-md:hidden">
                               {book.publishYear}
                            </td>

                            <td className="border border-cyan-700 rounded-md text-center">
                               <div className="flex justify-center gap-x-4">
                                <Link to={`/books/details/${book._id}`}>
                                    <BsInfoCircle className="text-2xl text-green-800" />
                                </Link>

                                <Link to={`/books/edit/${book._id}`}>
                                    <AiOutlineEdit className="text-2xl text-yellow-800" />
                                </Link>

                                <Link to={`/books/delete/${book._id}`}>
                                    <MdOutlineDelete className="text-2xl text-red-800" />
                                </Link>

                               </div>
                            </td>




                        </tr>
                    ))}
                </tbody>
            </table>
  )
}

BooksTable.propTypes = {
    books: propTypes.array.isRequired
}

export default BooksTable
