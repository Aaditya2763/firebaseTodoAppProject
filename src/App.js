
import './App.css';
import Header from './components/header/header';
import ListBox from './components/listBox/ListBox';
import InputBox from './components/inputBox/inputBox';
import { useState } from 'react';
import { useEffect } from 'react';
import { app, database } from "./firebaseConfig"
import { collection, addDoc, getDocs } from 'firebase/firestore';


function App() {
const collectionRef=collection(database,"Todos")
  const [input,setInput]=useState("");
const [todos,setTodos]=useState([]);

  return (
    <div className="container">
   <Header />

   <ListBox todos={todos}
   setTodos={setTodos}/>

   <InputBox input={input}
   setInput={setInput}
   todos={todos}
   setTodos={setTodos}
   />
  
    </div>
  );
}

export default App;
