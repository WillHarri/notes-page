const express = require("express");
const notesService = require("./note-service");

const PORT = 3000 ;
const URL = `http://localhost ${PORT}`;


const app = express();
app.listen(PORT, function (err) {
    if (err) {console.log("Error in server setup")};
    console.log(`Server listening on port: ${PORT}`);
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(`The server is running at ${URL}`);

app.get ("/", async function (req, res) {
    return res.status(200).sendFile(__dirname + "/index.html");
    });   

    app.post("/notes", async function (req, res) {
    
       console.log(req.body);
        const result = notesService.createNewNote(req.body.message);
        return res.status(201).json(result);

    });


