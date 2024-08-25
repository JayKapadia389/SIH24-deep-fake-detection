const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000;

const corsOptions = {
    origin : "http://localhost:5173",     
    // origin : "",     
    credentials:true,
    optionSuccessStatus:200        
}

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors(corsOptions));

app.post("/test" , (req , res)=>{
    console.log(req.body) ;

    res.send("ok")
})

app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`);
})