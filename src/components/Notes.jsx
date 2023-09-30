import { useEffect, useState } from "react";
import Note from "./Note";
function Notes(props) {
 
  return (      
           props.yourNotes.length == 0 ?
              <div className="loader"><div></div></div>
            
           :(
             <div className="notes">
              {
                props.yourNotes.map((note)=>{
                  return <Note key={note._id} nt={note} yourNotes={props.yourNotes} setYourNotes={props.setYourNotes} />                        
                })
              }
             </div>
           )        
  );
}
export default Notes;
