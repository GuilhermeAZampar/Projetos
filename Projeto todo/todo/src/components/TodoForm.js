import React, { useState } from "react";
import { addItem } from "../actions/listAction";
import { useDispatch } from "react-redux";


function TodoForm(props){
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    
    
    function handleChange(event){
        let t = event.target.value;
        setText(t);
    }

    function addItemEVent(event){
        event.preventDefault();
        if(text){
        dispatch(addItem(text))
        setText("");
        props.onHideModal()
        }else{
            alert("Insira na lista um item")
        }
        }


return(

    <form>
    <input onChange={handleChange} type="text" value={text}></input>
    <button onClick={addItemEVent}>Add</button>
    </form>
)
}


export default TodoForm;