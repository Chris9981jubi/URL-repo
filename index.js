import express from "express";
import {nanoid} from "nanoid";
import fs from "node:fs";

const app= express();

app.use(express.json());
app.post("/url-shortner", (req,res)=>{
    const shorturl = nanoid(10);
    const urlMap ={
        [shorturl]: req.body.url,
    };
    fs.writeFileSync("urlmap.json", JSON.stringify(urlMap));
    res.json({
        success: true,
        data: `http://localhost:8080/${shorturl}`,
    });
});
app.listen(8080, ()=>
    console.log("server is up and running on localhost 8080")
);