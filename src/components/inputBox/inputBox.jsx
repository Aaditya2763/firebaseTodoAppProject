
import React from 'react'
import{app,database} from  "../../firebaseConfig"
import { collection,addDoc,getDocs,deleteDoc} from 'firebase/firestore';

import {v4 as uuidv4 } from 'uuid';
import classes from "./inputBox.module.css"

const inputBox = ({input, setInput,todos, setTodos}) => {
  const collectionRef = collection(database, "Todos")

    const onChangeInput=(e)=>{
      setInput(e.target.value);
    }


    const submitHandler=(e)=>{
        e.preventDefault();
     
        addDoc(collectionRef ,{
          title:input,
          
        })
        .then(()=>{
          setTodos([...todos, { id: uuidv4(), title: input }]);
          setInput("");
          // console.log(todos)
        })
        .catch((err)=>{
          alert(err.message)
        })
      // const getdata = (() => {
        getDocs(collectionRef)
          .then((response) => {
            console.log
            (response.docs.map((item)=>{
              return {...item.data(),id:item.id}
            }))
          })
          .catch((err) => {
            console.log(err)
          })
      // })
    
    
        
   
    }

  return (
    <div className={classes.inputBox}>
          <form  onSubmit={submitHandler}>
            <input type="text" className={classes.inputArea} value={input}  placeholder="Enter list name..."required
            onChange={onChangeInput} />
            <button className={classes.submitBtn}  type="submit">Add</button>
        </form>
    </div>
  )
}

export default inputBox