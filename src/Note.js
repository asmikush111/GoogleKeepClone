import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

function Note(props) {
   const deleteNote=()=>{
    props.deleteItem(props.id);
   }

   const editNote=()=>{
      props.editItem(props.id);
     }
    return (
     <div className="note">
            <h1 >{props.title}</h1>
            <br/>
            <p>{props.content}</p>
           
            <button className='btn' onClick={deleteNote}>
               <DeleteOutlineIcon className='deleteIcon'/>
            </button>
            <button className='btn' onClick={editNote}>
               <ModeEditIcon className='editIcon'/>
            </button>
      </div>);
  }
  
  export default Note;