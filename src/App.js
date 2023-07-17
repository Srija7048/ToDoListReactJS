
import { useState } from 'react';
import './App.css';
import { Task } from './Task';


function App() {
  const [todoList,setTodoList]=useState([]);
  const [newTask,setNewTask]=useState("");
  
 

  const addtask=(event)=>{
    setNewTask(event.target.value);
  }

  
  const updatelist=()=>{
    const task={
      id:todoList.length===0?1:todoList[todoList.length-1].id+1,
      taskName:newTask,
      completed:false
      
    }
    
    setTodoList([...todoList,task]);
    setNewTask('');
  }
  const deleteTask=(task)=>{
    setTodoList(todoList.filter((tas)=>
      tas.id!==task))

  }
  const completeTask=(id)=>{
    setTodoList(todoList.map((task)=>{
      if(task.id===id && task.completed===false){
        return {...task,completed:true};
       
      }else{
        return {...task,completed:false};
      }
      
    }));
  
  }


  
    return (
    <div className="App">
      <div className='header' style={{backgroundColor:'violet',width:'90%',height:'50px',textAlign:'center',marginTop:'2px',fontFamily:'initial',fontSize:'30px',padding:'3px'}}><strong>To Do list</strong></div><br/>
      <input className='input' type='text' onChange={addtask} placeholder='    add your task' /><br/>
      <button onClick={updatelist}>Add Task</button><br/>
      <div className='list'>
       {todoList.map((task)=>{
       
        return (<Task taskName={task.taskName} id={task.id} completed={task.completed}  deleteTask={deleteTask} completeTask={completeTask} />
       
        );      
       })}
      </div>
    </div>
    
  );
}

export default App;
