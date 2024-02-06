const express= require('express');
const router = express.Router();

const {getBooks,getBookById,addNewBook,updateBook,deleteBook} = require('../../controllers/bookController')


router.route('/').get(getBooks).post(addNewBook);

router.route('/:id').get(getBookById).put(updateBook).delete(deleteBook)


  module.exports = router;