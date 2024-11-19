// defining constants
urlGlobe = "http://localhost:3000/notes/";

// -------------------------------------------------------------------
// POSTING
// -------------------------------------------------------------------

/// Grabbing elements from HTML
const PostNotes = document.getElementById("postNotes");
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
        notes: PostNotes.value,
      }),
    });

    const jsonData = await response.json();
    console.log(jsonData.message);

    messageDisplay.textContent = jsonData.message;
  } catch (error) {
    console.log(error);
  }
}

// -------------------------------------------------------------------
// GET
// -------------------------------------------------------------------

// -------------------------------------------------------------------
// DEL
// -------------------------------------------------------------------
