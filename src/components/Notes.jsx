import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Note from "./Note";

function Notes(props) {

  const showConfirmationDialog = (id) =>{
    Swal.fire({
        title: "Cation!",
        text: "Are you sure you want delete this Note ?",
        icon: "warning",
        footer: "Note: you cant undo this operation",
        showDenyButton: true,
        denyButtonText: "No",
        confirmButtonText: "yes sure",
        confirmButtonColor: "#14d1d1",
      }).then((result) => {
        if (result.isConfirmed)
            handleDelceteNote(id)
      }
  )
}

  const handleDelceteNote = (id) =>{   
    fetch(`http://localhost:3100/notes/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then(
        props.setData({
          ...props.data,
          notes: props.data.notes.filter((el) => el._id !== id),
        })
      ).then(()=>{showSuccessMessage()})
  }

  const showSuccessMessage = () => {
    Swal.fire({
        title: "Success",
        text: "Your Note was deleted successfully",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#14d1d1",
      })
  }

  const handleSaveEditNote = (id, newValue) =>{
    fetch(`http://localhost:3100/notes/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: newValue,
      }),
    }).then(() => {
      let newNotes = props.data.notes.map((ele) => {
        if (ele._id == id) return { ...ele, content: newValue };
        else return ele;
      });
      props.setData({ ...props.data, notes: newNotes });
    });
  }

  if (props.data.isLoading)
    return (
      <div className="loader">
        <div></div>
      </div>
    );
  else if (props.data.notes?.length == 0)
    return <div className="emptyNotes">You dont have notes yet</div>;
  
    return (
      <div className="notes">
        {props.data.notes?.map?.((note) => {
          return (
            <Note
              key={note._id}
              note={note}
              onDelete={showConfirmationDialog}
              onSaveEdit={handleSaveEditNote}
            />
          );
        })}
      </div>
    );
}
export default Notes;
