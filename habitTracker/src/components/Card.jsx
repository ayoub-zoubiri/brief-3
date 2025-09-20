import React from 'react'
import Progress from "./Progress.jsx";
import ListOfTask from "./ListOfTask.jsx";


const Card = ({user ,deleteTask, toggleTask}) => {
  // Calculate progress based on completed tasks
  const completedTasks = user.tasks.filter(task => task.done).length;
  const totalTasks = user.tasks.length;
  const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  return (
    <div className="flex flex-col items-center justify-between w-80 pb-5 bg-white rounded-[20px] border border-[#5C63F9] shadow-xl px-4 " >
      <div className="flex flex-col items-center justify-between w-70 h-[50%]">
        <img className="w-24 h-24 rounded-full shadow-xl mt-5 border-[2px] border-[#5C63F9] " src={user.image} alt="photo"/>
      <h1 className = "text-[24px] font-medium my-3 " >{user.name}</h1>  
      <Progress progress={progressPercentage}/>
      </div>
      <div className="w-70 h-[50%]">
        
  <ListOfTask routines = {user.tasks} deleteTask= {deleteTask} toggleTask={toggleTask} userId={user.id}/>
      </div>
    </div>
    
    
  )
}

export default Card
