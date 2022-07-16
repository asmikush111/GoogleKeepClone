
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import {useState} from 'react';

const CreateNote =(props)=>{
   const [note,setNote]=useState({
    title:"",
    content:"",
   });
 
   const [expand,setExpand]=useState(false);

   const inputEvent=(event)=>{
    const {name,value}=event.target;
    setNote({
        ...note,
        [name]:value
    });
   }

   const addEvent=()=>{
      props.passNote(note);
      setNote({ title:"",
      content:"",
     });
   }
   
   const expandIt=()=>{ setExpand(true); }
   const backIt=()=>{setExpand(false);  }

    return (
      <div className="main_note" onDoubleClick={backIt}>
        <form>
         {expand && <input type="text" name="title" onChange={inputEvent} value={note.title} placeholder="Title" autoComplete='off' />}
          <textarea rows="" column="" name="content" onChange={inputEvent} onClick={expandIt} value={note.content} placeholder="Create a note..."/>
         {expand && <Button onClick={addEvent}> 
            <AddIcon className="plus_sign"/>
          </Button>}
        </form>
      </div>
    );
}


export default CreateNote;