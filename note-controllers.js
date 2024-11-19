// Importing

const express = require("express");
const path = require("path");
const notesService = require("./note-service");

// -------------------------------------------------------------------
// Starting up our server
// -------------------------------------------------------------------

const PORT = 3000;
const URL = `http://localhost:${PORT}`;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in server setup");
  }
  console.log(`Server listening on port: ${PORT}`);
  console.log(`The server is running at ${URL}`);
});

app.get("/", async function (req, res) {
  return res.status(200).sendFile(__dirname + "/index.html");
});

//=============================================================

//      HTTP METHODS

//=============================================================

//  POST : adds a new note
app.post("/notes", async function (req, res) {
  console.log(req.body);
  const result = notesService.createNewNote(req.body.message);
  return res.status(201).json(result);
});
