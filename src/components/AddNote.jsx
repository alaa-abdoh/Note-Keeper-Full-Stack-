import { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import Form from './Form';
import Swal from 'sweetalert2'


function AddNewNote({onAddNoteSuccess}){
    const [isAdding, setIsAdding] = useState(false);

    function handleClick(){
        setIsAdding(!isAdding)
    }

    function handleSubmit (values){
        fetch("http://localhost:3100/notes", {
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(values)
        }).then((res)=>res.json()) 
        .then((data) => onAddNoteSuccess(data.note))
        .then(
            Swal.fire({
                title: 'Success',
                text: 'Your new Note added successfully',
                icon: 'success',
                confirmButtonText:"OK",
                confirmButtonColor:"#14d1d1"
              })
        )
        setIsAdding(false)
    }

    return (
        !isAdding ? 
            <Button onClick={handleClick}>
                <FontAwesomeIcon icon={faPen} className='penIcon'/>
                New Note
            </Button>
        :
        (
            <Form onSubmit={handleSubmit} onClick={handleClick} /> 
        )    
        
    )
}
export default AddNewNote;