const database = {"0": {note:"note 0"} , "1" : {note: "note 1"}} 

function getNote(id) {
    const noteGrabbedById = database [id]
    console.log(noteGrabbedById)
    }

    getNote ("1")