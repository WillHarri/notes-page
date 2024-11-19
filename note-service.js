let database = {};

let idCount = 0
function createNewNote(data) {



    let id;
    if (idCount === 0) {
        id = 0;
        idCount = 1
    } else {
        id = idCount
        idCount =+ 1
    }
    
    const date = String(new Date());

    const idString = id.toString();

    database[idString] = {
        _id: id,
        date: date,
        notes: data,
    };

    const result = {
        message: "You have added a new note.",
        database: database,
    };


console.log (database)

return result;
}

module.exports = {
    createNewNote,
    };