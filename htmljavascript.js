// defining constants
urlGlobe = "http://localhost:3000/notes/";

// -------------------------------------------------------------------
// POSTING
// -------------------------------------------------------------------

/// Grabbing elements from HTML
const postNotes = document.getElementById("postNotes");
const messageBox = document.getElementById("messageBox");


async function PostNotesFunc() {
  console.log("PostNotesFunc");
  let id = "";
  let HTTPmethod = "POST";

  try {
    const response = await fetch(urlGlobe + id, {
      method: HTTPmethod,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        message: postNotes.value,
      }),
    });

    const jsonData = await response.json();
    console.log(jsonData.message);

    messageBox.textContent = jsonData.message;
  } catch (error) {
    console.log(error);
  }
}

// -------------------------------------------------------------------
// GET
// -------------------------------------------------------------------

const idSelector = document.getElementById("idSelector");
const dateBox = document.getElementById("dateBox");
const noteBox = document.getElementById("noteBox");

idSelector.addEventListener("change", () => {
  const id = idSelector.value;
  updateDisplay(id);
});


async function updateDisplay(id) {

  try {
    const response = await fetch(urlGlobe + id, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    const jsonData = await response.json();
    noteBox.textContent = jsonData.notes;
    dateBox.textContent = jsonData.date;
  } catch (error) {
    console.log(error);
  }
}



// -------------------------------------------------------------------
// DEL
// -------------------------------------------------------------------
