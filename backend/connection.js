const { default: mongoose } = require("mongoose");

const dbname = "minipro";
dbUrl = `mongodb+srv://databaseuser:databaseuser@cluster0.szwbnhy.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(dbUrl)
.then((result) => {
    console.log ('database connected');
}).catch((err) => {
    console.log(err);
});


module.exports = mongoose;