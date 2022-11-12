import '../css/todolist.css';

import React, { useState } from 'react';

import Lists from './Lists';

import { addTodo,updateTodo} from '../actions/todocurd';


import {useDispatch} from 'react-redux';


export default function Todolist() {

  

const [todolists,setTodolists]=useState([]);
const [task,setTask]=useState('');
const [description,setDescription]=useState('');
const [category,setCategory]=useState('general');
const [showupdatebutton,setShowupdatebutton]=useState(false);
const [updateindex,setUpdateindex]=useState('');


const [categories,setCategories]=useState(["general","coding","office","home"]);
const [customcategory,setCustomcategory]=useState('');


const dispatch=useDispatch();


const UpdateTask=(e)=> {
  e.preventDefault();
  setShowupdatebutton(false);

  if(updateindex>-1) {
    
     let newtodolists=[...todolists];
     newtodolists[updateindex].task=task;
     newtodolists[updateindex].description=description;
     newtodolists[updateindex].category=category;
     setTodolists(newtodolists);
     setTask('');
     setDescription('');

  }
}

const Addcustomcategory=()=> {
  if(customcategory.length>1) {
     let newcategories=[...categories];
     newcategories.push(customcategory);
     setCategories(newcategories);
     setCustomcategory('')
  }else {
    alert("can not add empty category")
  }

}


  return (
    <>
    <div className='todolist'>
      <form >
        {/* {showupdate &&<input type='text' value={utask} onChange={(e)=>setUtask(e.target.value)}/> } */}
        <input type='text' placeholder='Enter Your Task' value={task} onChange={(e)=>setTask(e.target.value)}/>
        {!showupdatebutton &&<button onClick={(e)=>{dispatch(addTodo(e,task,description,category));setTask('');setDescription("")}}>Add Task</button>}
        { showupdatebutton &&<button onClick={(e)=>{dispatch(updateTodo(e,updateindex,task,description,category));setShowupdatebutton(false);setTask('');setDescription("")}}>Update</button>}
        <textarea type='text' placeholder='Describe Your Task' value={description} onChange={(e)=>setDescription(e.target.value)}/>

      </form>

      <div className='categories'>
        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
          {categories.map((category,index)=> (
        
          <option key={index} value={category}>{category}</option>
          
      ))}
        </select>

        <input placeholder='Custom Category' value={customcategory} onChange={(e)=>setCustomcategory(e.target.value)}/><button type='submit' onClick={(e)=> Addcustomcategory(e)}>Add</button>
      </div>

     
    </div>

    <div>
      <Lists todolists={todolists} setTodolists={setTodolists} setShowupdatebutton={setShowupdatebutton} 
      updateindex={updateindex} setUpdateindex={setUpdateindex}
      task={task} setTask={setTask}
      setDescription={setDescription}
      setCategory={setCategory}
      category={category}
      categories={categories}
      />
    </div>
    </>
  )
}
