import mongoose from 'mongoose';
import express from 'express'
const app = express();

const DB = 'mongodb+srv://adnan:adnansam@cluster0.6zvikxu.mongodb.net/mernstack?retryWrites=true&w=majority'
mongoose.connect(
    DB,
    async(err)=>{
        if(err) throw err;
        console.log("connected to db")
    }
)






//Middleware to authenticate user

const middleware = (req, res, next)=>{
    console.log(`Hello my Middleware`);
    next();
}




app.get('/' ,(req, res)=>{
    res.send(`Hello world from server`);
    
});
app.get('/about', middleware, (req, res)=>{
    console.log(`Hello my about`);
    res.send(`Hello about world from server`);
});
app.get('/contact' ,(req, res)=>{
    res.send(`Hello contact world from server`);
});
app.get('/signin' ,(req, res)=>{
    res.send(`Hello signin world from server`);
});
app.get('/signup' ,(req, res)=>{
    res.send(`Hello signup world from server`);
});

app.listen(3000, ()=>{
    console.log(`Server is running at port number 3000`)
})


// mongodb+srv://adnan:<password>@cluster0.6zvikxu.mongodb.net/?retryWrites=true&w=majority