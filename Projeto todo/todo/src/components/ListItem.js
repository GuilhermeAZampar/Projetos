import React from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { deleteItem,changeDone } from "../actions/listAction";

function DoneImg(props){
    if(props.done){
        return(
            <img alt="done" src="./assets/checkon24.png"></img>

        )
    }else{
        return(
            <img alt="undone" src="./assets/checkoff24.png"></img>
        )
    }
}







function ListItem(props){
 
   const dispatch = useDispatch()
    return(
         <li>
            <Card className={props.item.done ? "done item" : "item"}>
            {props.item.text}
            <div>
            <button onClick={()=>{dispatch(deleteItem(props.item.id))}}><img alt="delete" src="./assets/trash24.png"></img></button>
            <button onClick={()=>{dispatch(changeDone(props.item.id))}}><DoneImg done={props.item.done}></DoneImg></button>
            </div>
            </Card>
            </li>
            )}
      
    
    


export default ListItem;