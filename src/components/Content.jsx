import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import Button from "./Button"
import Notes from './Notes';
import Form from './Form';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

function Content(){
    let [isAdding, setIsAdding] = useState(false)
    let [isDataCome, setIsDataCome] = useState(false)
    let [yourNotes, setYourNotes] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3100/notes")
        .then(async (res) => await res.json())
        .then((data) => {
          setYourNotes(data.note);
          setIsDataCome(true)
        });
    }, []);

    function handleClick(){
        setIsAdding(true)
    }
    function handleSubmit(title, content){
        fetch("http://localhost:3100/notes", {
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                title:title,
                content:content
            })
        }).then((res)=>res.json()) 
        .then((data) => setYourNotes([...yourNotes, data.note]) )
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
    return(
        <div className="content">
            <div className="container">
                {!isAdding ? 
                    <Button onClick={handleClick}>
                        <FontAwesomeIcon icon={faPen} className='penIcon'/>
                        New Note
                    </Button>
                :
                (
                    <Form onSubmit={handleSubmit} /> 
                )    
                }
                <Notes yourNotes={yourNotes} setYourNotes={setYourNotes} isDataCome={isDataCome}/>
            </div>
        </div>
    )
}
export default Content;