
const Book = require('../model/bookModel')

const getBooks = async (req,res) => {
    try {
        const books = await Book.find({});
    
        return res.status(200).json({
          data: books,
        });
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
      }
}


const getBookById = async (req,res) => {
    try {
        const { id } = req.params;
    
        const book = await Book.findById(id);
    
        return res.status(200).json(book);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
      }
}

const addNewBook = (async (req,res) => {
   
    if(!req.body.title) {
        res.status(400)
        res.json({msg: 'Please add a text field'})
    }

    

    const book = await Book.create(
        {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            publishYear: req.body.publishYear,  
        }
    )

    res.json(book);
})


const updateBook = async(req,res) => {

    try {
        if (
          !req.body.title ||
          !req.body.author ||
          !req.body.genre ||
          !req.body.publishYear 
        ) {
          return res.status(400).send({
            message: 'Send all required fields: title, author, publishYear',
          });
        }
    
        const { id } = req.params;
    
        const result = await Book.findByIdAndUpdate(id, req.body);
    
        if (!result) {
          return res.status(404).json({ message: 'Book not found' });
        }
    
        return res.status(200).send({ message: 'Book updated successfully' });
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
      }
    
}

const deleteBook = async (req,res) => {
 
    try {
        const { id } = req.params;
    
        const result = await Book.findByIdAndDelete(id);
    
        if (!result) {
          return res.status(404).json({ message: 'Book not found' });
        }
    
        return res.status(200).send({ message: 'Book deleted successfully' });
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
      }
}


module.exports = {
    getBooks,getBookById,updateBook,addNewBook,deleteBook
}