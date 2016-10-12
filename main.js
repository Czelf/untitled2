/**
 * Created by arnoc on 12/10/2016.
 */
var express =  require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var books = [];
books.push({id:1, name:"Beginning Node JS", rating:4});
books.push({id:2, name:"Knoeien met data-distributie", rating:3});

app.get("/books", function(request, response){
    response.send (books)
});

app.post("/books", function(request, response){
    var book = request.body;
    book.id = books.length+1;
    books.push(book);
    response.status(204).send();
});

app.listen(4567);
console.log("woow, dees werkt, ofni ofwel");

/** http://localhost:4567/book */
