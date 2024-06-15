import React from "react";
import Card from "./Card";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";








function List(props){
 
const items = useSelector((state)=>{
    return state
})
    return(
        <ul>
        {items.map(item =><ListItem key={item.id} item={item} ></ListItem> )}
      
    </ul>
    )
}

export default List;