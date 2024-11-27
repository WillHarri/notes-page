let database = {};

//=====================================================

// POST

// Creating a new note

let idCount = 0;
function createNewNote(data) {
  // generate id
  let id;
  if (idCount === 0) {
    id = 0;
    idCount = 1;
  } else {
    id = idCount;
    idCount += 1;
  }

  // Generate constants
  const date = String(new Date());
  const idString = id.toString();

  //add note to our database
  database[idString] = {
    _id: id,
    date: date,
    notes: data,
  };

  // send successful response object
  const result = {
    message: "You have added a new note.",
    database: database,
  };

  console.log(database);

  return result;
}

//=====================================================

// GET

function getNote(id) {
  const noteGrabbedById = database [id]
  console.log(noteGrabbedById)
  console.log(`this is the id: ${id}`)
  console.log(`This is our note of the id: ${database[id]}`);
  console.log(typeof[id]);
  return database[id]
  }

// function to get note by id
//=====================================================


// PATCH

// function to update a note given an id

//=====================================================

// DELETE

// function to delete a note based on the id

// function to delete all notes

//-----------------------------------------------

module.exports = {
  createNewNote,
  getNote,
};
