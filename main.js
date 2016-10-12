/**
 * Created by arnoc on 12/10/2016.
 */
var express =  require('express');
var app = express();

app.listen(4567);

app.get("/book", function(request, response){
    response.send ({name:"Beginning Node JS", rating:4})
});

console.log("woow, dees werkt, ofni ofwel");

/** http://localhost:4567/book */
