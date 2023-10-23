import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "./Button";

function Note(props) {
  let { note } = props;
  let [isEditing, setIsEditing] = useState(false);
  let [newValue, setNewValue] = useState(note.content);
  let date, time;
  function extractDateAndTime(dateStr) {
    const objDate = new Date(dateStr);
    date = objDate.toISOString().split("T")[0];
    time = objDate.getHours() + ":" + objDate.getMinutes();
  }

  extractDateAndTime(note.createdAt);

  return (
    <div className="note">
      <div className="header">
        <h3 className="title" title={note.title}>
          {note.title}
        </h3>
        <div>
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
      {!isEditing ? (
        <p className="body">{note.content}</p>
      ) : (
        <form className="body">
          <input
            value={newValue}
            onChange={(e) => {
              setNewValue(e.target.value);
            }}
            style={{ width: "90%", color: "black" }}
            autoFocus
            type="text"
          />
        </form>
      )}
      <div className="footer">
        <FontAwesomeIcon
          onClick={() => props.onDelete(note._id)}
          icon={faTrash}
          className="icon"
          title="Delete"
        />
        {!isEditing ? (
          <FontAwesomeIcon
            onClick={() => setIsEditing(true)}
            icon={faPencil}
            className="icon"
            title="Edit"
          />
        ) : (
          <Button onClick={()=>{props.onSaveEdit(note._id, newValue); setIsEditing(false)}} submit={true}>
            Save
          </Button>
        )}
      </div>
    </div>
  );
}
export default Note;
