const express = require("express");
const db = require('./config/db'); 
const cors = require("cors");

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{

})

app.post("/api/create"), (req, res) =>{

  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;

  db.query("INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?), [title, text, userName]", 
  (err, result) =>{
    if (err){
      console.log(err)
    }  
      console.log(result)
 }
);

}

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})