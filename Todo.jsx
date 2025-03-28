import "./Todo.css"
import { useState } from "react"
import { HiArchiveBoxXMark,HiCheck } from "react-icons/hi2";


const Todo = () => {
   const [dateTime, setDateTime] = useState("");
   const [inputValue, setInputValue] = useState("");
   const [task, setTask] = useState([])

   const handleInput =(value)=>{
      setInputValue(value);
   };

   const formSubmit=(event)=>{
      event.preventDefault();
      if(!inputValue) return;
      if(task.includes(inputValue)) {
         setInputValue("");
         return;
      }
setTask((prevTask)=>[...prevTask,inputValue]);
     
setInputValue("");
   };


 const interval = setInterval(()=>{
   const now=new Date();
   const DateFormat=now.toLocaleDateString();
   const TimeFormat=now.toLocaleTimeString();
   setDateTime(`${DateFormat} - ${TimeFormat}`);
},1000);


const handleDelete =(value)=>{
   console.log(task)
   console.log(value)
   const deleteTask=task.filter((curTask)=>curTask!==value);
   setTask(deleteTask);
}

  return (
  <section className='parant-cantenar'>
   <nav>
      <h1>TODO APP</h1>
      <h2>{dateTime}</h2>
   </nav>
   
   <section className="todo-input">
      <form onSubmit={formSubmit}>
      <div>
         <input type="text" placeholder="Enter your Tasks.."autoComplete="off"className="input" value={inputValue} onChange={(event)=>handleInput(event.target.value)}/>
      </div>
      <div>
         <button className="form-btn" type="submit">Add Task</button>
      </div>
      </form>
   </section  >
   <section className="todo-list">
<ul>
   {
     task.map((curElem,index)=>{
return<li className="list" key={index}>
<span>{curElem}</span>
<button className="add-btn"><HiCheck /></button>
<button className="dlt-btn" onClick={()=>handleDelete(curElem)}><HiArchiveBoxXMark /></button>
</li>
     })
     
   }
   
</ul>
   </section>
  </section>
  )
}

export default Todo;
