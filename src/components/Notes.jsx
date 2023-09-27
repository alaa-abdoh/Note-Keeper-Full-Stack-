import { useEffect, useState } from "react";
import Note from "./Note";
function Notes() {
  let [yourNotes, setYourNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/notes")
      .then(async (res) => await res.json())
      .then((data) => {
        setYourNotes(data.note);
      });
  }, []);

  return (
    <div className="notes">
        {
            yourNotes.map((note)=>{
                return <Note key={note._id} nt={note}/>
            })
        }
    </div>
  );
}
export default Notes;
