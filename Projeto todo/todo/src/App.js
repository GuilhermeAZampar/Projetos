import React, { useEffect, useState } from "react";
import List from "./components/List";
import Item from './components/Item2'
import TodoForm from "./components/TodoForm";
import './Todo.css';
import Modal from "./components/Modal";
import {createStore} from 'redux';
import {Provider, createStoreHook} from 'react-redux';
import listReducer from "./reducers/listReducer";
const store = createStore(listReducer)
const SAVED_ITEMS="savedItems";


function App(){

const[showModal,setShowModal]  = useState(false)  
//const [items,setItems]=useState([]);

//useEffect(()=>{
   // let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
   // if(savedItems){
       // setItems(savedItems)
   // }

//},[])

//useEffect(()=>{
//localStorage.setItem(SAVED_ITEMS,  JSON.stringify(items))

//},[items])




    
    
    function onHideModal(){
    setShowModal(false)
    
    }
    


return(
<div className="container">
    <Provider store={store}>
    <header className="header"><h1>Todo</h1></header> <button onClick={()=>{setShowModal(true)}} className="addButton">+</button>
   {/*<TodoForm onAddItem={onAddItem}></TodoForm>*/}
<List></List>
   <Modal show={showModal} onHideModal={onHideModal}><TodoForm onHideModal={onHideModal}></TodoForm></Modal>
   </Provider>
    </div>
)




}





export default App