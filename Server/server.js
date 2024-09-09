const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000;
const axios = require('axios');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Configure this as needed

let XceptionURL = "https://1103-35-237-210-195.ngrok-free.app" ;
let tortoiseTTSURL = "https://20a5-35-204-49-25.ngrok-free.app/";

const corsOptions = {
    origin : "http://localhost:5173",     
    // origin : "",     
    credentials:true,
    optionSuccessStatus:200        
}

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors(corsOptions));

app.post("/middleware" ,upload.single('file'), (req , res)=>{

    console.log(req.file) ;

    console.log(req.body) ;
    console.log(typeof(req.body.video))

    let video = req.body.video ;
    let useAudio = req.body.useAudio ;

    res.json(
        // handleUploadWithBooleanCondition(video , useAudio)

        {
            "name" : "isnewnf"
        }
    )
})

//jwjewefowo

const handleUploadWithBooleanCondition = async (video, useAudio) => {
    try {
    
        // First request to the first server
        const request1 = axios.post(XceptionURL + "/predict", video, {
            
            withCredentials: true,
        });

        let request2;
        if (useAudio) {
            // If boolean is true, prepare the second request
            request2 = axios.post(tortoiseTTSURL, video , {
                
                withCredentials: true,
            });
        }

        // Wait for both requests if the second one exists
        const [response1, response2] = await Promise.all([
            request1,
            useAudio ? request2 : Promise.resolve(null) // Only wait for the second if needed
        ]);

        // Merge responses
        const mergedData = {
            server1Data: response1.data,
            server2Data: response2 ? response2.data : null // Handle the second response conditionally
        };

        console.log("Merged Response:", mergedData);

        return mergedData ;
        // Do something with the mergedData

    } catch (error) {
        console.error("Error uploading to servers:", error);
    }
};


//emdweofnoenoen

app.listen(PORT , ()=>{
    console.log(`listening on port ${PORT}`);
})