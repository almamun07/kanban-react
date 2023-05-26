import React, { useState } from 'react'
import { X } from 'react-feather'
import './Editable.css';

function Editable(props) {
    const [showEdit,setShowEdit]=useState(false);
    const [inputValue,setinputValue]=useState("");
  return (
    <div className='editable'>
        {
        
        showEdit ? (
        <form className={`editableEdit ${props.editClass || ""}`} 
            onSubmit={(event)=>{
                event.preventDefault();
                if(props.onSubmit)props.onSubmit(inputValue);
                setShowEdit(false);
                setinputValue("");
            }}
        >
            <input autoFocus type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)} 
            placeholder={props.placeholder || "Enter Item"}/>

            <div className='editableEditFooter'> 
                <button type='submit'>{props.buttonText || "Add"}</button>
                <X onClick={() => setShowEdit(false) }/>
            </div>
            </form>
        
        ): ( <p className={`editableDisplay ${props.displayClass || ""}`} onClick={() => setShowEdit(true)} > {props.text || "Add Item"}</p>
        )}
        
    </div>
  );
}

export default Editable