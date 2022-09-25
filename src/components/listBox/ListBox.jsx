import React from 'react'
import { useEffect } from 'react'
import classes from "./listBox.module.css"
import {RiArrowDownSFill,RiArrowUpSFill } from "react-icons/ri"
import { CgMathPlus } from "react-icons/cg"
import { app, database } from "../../firebaseConfig"
import { collection, addDoc,doc, getDocs, deleteDoc } from 'firebase/firestore';



const ListBox = ({ todos,setTodos }) => {
  const collectionRef = collection(database, "Todos");

  const getData=()=>{
    getDocs(collectionRef)
      .then((response) => {

        setTodos(response.docs.map(item=>({id:item.id,title:item.data().title})))
       
      })
      .catch((err) => {
        console.log(err)
      })

 console.log(todos)
  }

  useEffect(() => {

   
getData()

  }, [])


 const trashBtnHandler=({id})=>{
  const dataToDelete=doc(database,"Todos",id)
  deleteDoc(dataToDelete)
  .then(()=>{
    console.log("deletd data sucessfully")
  })
  .catch((err)=>{
    console.log(err)
  })
  setTodos(todos.filter((todo)=>todo.id !==id))

 }
  return (
    <div className={classes.listBox}>

{todos.map((todo)=>{
  return(
   
    <li key={todo.id} className={classes.todosItem}>
    <p>{todo.title}</p>
      <div className={classes.actionBtn}>
        <div style={{ color: "rgb(82, 82, 249)", width: "80px" }}>
          <RiArrowUpSFill className={classes.sortupBtn} />
          <RiArrowDownSFill className={classes.sortdownBtn} />
        </div >
        <CgMathPlus className={classes.trashBtn} onClick={()=>trashBtnHandler(todo)} />
      </div>
    </li>
  )
})}



     
    </div>
  )
}

export default ListBox