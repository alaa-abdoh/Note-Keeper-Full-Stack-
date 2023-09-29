import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faPencil} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'
import { useState } from 'react';
import Button from './Button';
function Note(props){
    let {nt} = props;
    let [isEditing, setIsEditing] = useState(false);
    let [newValue, setNewValue] = useState(nt.content)
    let date, time;
    function extractDateAndTime(dateStr){
        const objDate = new Date(dateStr);
        date = objDate.toISOString().split('T')[0];
        time = objDate.getHours() + ":" + objDate.getMinutes();
    }
    extractDateAndTime(nt.createdAt)

    function handleDelete(id){
        Swal.fire({
            title: 'Cation!',
            text: 'Are you sure you want delete this Note ?',
            icon: 'warning',
            footer: "Note: you cant undo this operation",
            showDenyButton:true,
            denyButtonText:"No",
            confirmButtonText:"yes sure",
            confirmButtonColor:"#14d1d1"
          }).then((data)=>{
            if(data.isConfirmed == true){
                fetch(`http://localhost:3100/notes/${id}`,{
                    method:"delete"
                   })
                   .then((res)=>res.json())
                   .then(
                       Swal.fire({
                           title: 'Success',
                           text: 'Your Note was deleted successfully',
                           icon: 'success',
                           confirmButtonText:"OK",
                           confirmButtonColor:"#14d1d1"
                         })
                   )
                   .then(
                       props.setYourNotes(
                           props.yourNotes.filter(el=>
                               el._id !== id
                           )
                       )
                   )
            }
          })
    }
    function handleClickSave(){
        fetch(`http://localhost:3100/notes/${nt._id}`,{
        method:"put",
        headers: { 
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                content : newValue
            })
    }).then(()=>{
        let newNotes = props.yourNotes.map((ele)=>{
            if(ele._id == nt._id)
                return { ...ele, content: newValue };
            else return ele
        })
        props.setYourNotes(newNotes)
    })
    setIsEditing(false)
    }
    return (
        <div className="note">
            <div className="header">
                <h3 className="title" title={nt.title}>{nt.title}</h3>
                <div>
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
            </div>
            {
                !isEditing ? <p className="body">{nt.content}</p> : (
                    <form className="body" >
                        <input value={newValue} onChange={(e)=>{setNewValue(e.target.value)}} style={{width:"100%", color:"black"}} autoFocus type="text"/>
                    </form>
                )
            }                 
            <div className="footer">
                <FontAwesomeIcon onClick={()=> handleDelete(nt._id)} icon={faTrash} className='icon' title='Delete'/>
                {
                    !isEditing ? <FontAwesomeIcon onClick={()=> setIsEditing(true)} icon={faPencil} className='icon' title='Edit'/> :
                    <Button onClick={handleClickSave} submit={true}>Save</Button>
                }
            </div>
        </div>
    )
}
export default Note;