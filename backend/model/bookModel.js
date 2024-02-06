const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please add a text value']
    },
    author: {
        type: String,
        required: [true, 'please add author name']
    } ,
    genre: {
        type: String,
        required: [true, 'add genre of book']
       },
    publishYear: {
        type: Number,
        required: [true, 'add publication year of the book']
    },
   
},

 {
    timestamps: true,
 }

)

module.exports = mongoose.model('Book', bookSchema)