urlGlobe = "http://localhost:3000/notes/";
const PostNotes = document.getElementById('PostNotes');
const messageDisplay = document.querySelector("pre[name = 'message']");

async function PostNotesFunc() {
    console.log("PostNotesFunc");
    let id = "";
    let HTTPmethod = "POST";

    try {
        const response = await fetch(urlGloble + id, {
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
          messageDisplay.textContent = jsonData.message;
    }
    catch (error) {
        console.log(error);
    }
}