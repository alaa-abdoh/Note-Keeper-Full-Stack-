import Notes from './Notes';
import { useState, useEffect } from 'react';
import AddNewNote from './AddNote';

function Content(){
    let [data, setData] = useState({
        notes:[],
        isLoading:false,
        error: ""
        })

    useEffect(() => {
      async function foo() {
       try{
            let obj= await (await fetch("http://localhost:3100/notes")).json();
            setData({...data, notes:obj.note, isLoading:true})
       }catch(e){
            setData({ ...data, isLoading: true, error: e.message });
       }
      }
      foo()
    })     
    
    function handleAddNoteSuccess(note){
        setData({...data, notes:[...data.notes, note]})
        console.log(data.notes)
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