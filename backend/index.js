const express = require ('express');
const userRouter = require ('./routers/userRouter');
const cors = require ('cors');

//initializing express
const app =express();
const port = 5000;

app.use (cors({
    origin : ['http://localhost3000']
}))

app.use(express.json());

//middleware here
app.use('/user', userRouter);

app.get("/Login", (req,res) => {
    res.send ('Login Page');
});

app.use(express.static('./static/resources'));


//to start the server
app.listen(port,() => {
    console.log("express server starter");
})