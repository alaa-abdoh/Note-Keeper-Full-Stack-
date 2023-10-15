import Notes from './Notes';
import { useState, useEffect } from 'react';
import AddNewNote from './AddNote';

function Content(){
    let [data, setData] = useState({
        notes:[],
        isLoading:true,
        error: ""
        })

    useEffect(() => {
      fetch("http://localhost:3100/notes")
        .then(async (res) => await res.json())
        .then((Data) => {
          setData({...data, notes:Data.note, isLoading:false})
        }).catch((error)=>{
            setData({ ...data, isLoading: false, error: error.message });
        })
    }, []);
    
    function handleAddNoteSuccess(note){
        setData({...data, notes:[...data.notes, note]})
    }

    return(
        <div className="content">
            <div className="container">
                <AddNewNote onAddNoteSuccess={handleAddNoteSuccess}/>
                <Notes data={data} setData={setData} />
            </div>
        </div>
    )
}
export default Content;