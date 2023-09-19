const express = require('express');
const mongoose=require('mongoose');
const app =express();
const router =require('./routes/routes');

app.use(express.json());
app.use('/crud',router);


app.listen(3001,()=>{
    console.log('server running on port :3001 sucessfully')
});

connectionString="mongodb+srv://biradarajay1024:2SquaGGMGJA0mGq7@cluster0.uv2ebyu.mongodb.net/?retryWrites=true&w=majority mongodb://localhost:27017";
mongoose.connect(connectionString,{
    useUnifiedTopology:"true",
usenewUrlParser:"true"
})


.then(()=>{
    console.log('MongoDB conection Succesfull');
})
.catch((err)=>{
    console.log("Database connection failed "+err.message);
});