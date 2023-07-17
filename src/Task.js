import {RiCloseCircleLine} from 'react-icons/ri'

export const Task=(props)=>{
    return (
    <div className="task" style={{backgroundColor:props.completed?"lightgreen":"white"}}>
        <h3>{props.taskName}</h3>
        <RiCloseCircleLine style={{marginRight:'5px',marginLeft:'5px',color:'red'}} onClick={()=>props.deleteTask(props.id)}/>

        <button onClick={()=>props.completeTask(props.id)}>Complete</button>
        
        </div>);};
