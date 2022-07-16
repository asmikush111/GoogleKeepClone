import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';
import {useState} from 'react';

function App() {
  const [addItem,setAddItem]=useState([]);

  const addNote=(note)=>{
      setAddItem([
      ...addItem,note
      ]);
    }
    const onDelete=(id)=>{
      setAddItem(
        addItem.filter((val,i)=> {return i!==id})
      )
    }
    
    const onEdit=(id)=>{
      //let item=addItem.find((val,i)=>{return i===id});
    }

  return (<>
    <Header/>
    <CreateNote passNote={addNote} />
    {addItem.map((val,i)=>{
      return <Note key={i} id={i} title={val.title} content={val.content} deleteItem={onDelete} editItem={onEdit}/>
    })}
    <Footer/>
    </>);
}

export default App;
