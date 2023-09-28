import { useEffect, useState } from "react";
import Note from "./Note";
function Notes(props) {
 
  return (
    <div className="notes">
        {
            props.yourNotes.map((note)=>{
                return <Note key={note._id} nt={note}/>
            })
        }
    </div>
  );
}
export default Notes;
