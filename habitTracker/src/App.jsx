import { useState , useEffect} from 'react'

import Title from "./component/title";
import Task from "./component/task";
import Cards from "./component/cards";


import './App.css'

function App() {

const tasks =[
      {
        "id": 1,
        "name": "Ayoub",
        "image":"/photo.jpg",
        "tasks": [
          { "id": 1, "title": "Sport", "done": true },
          { "id": 2, "title": "Lecture", "done": false }
        ]
      },
      {
        "id": 2,
        "name": "Mouad",
        "image":"/photo.jpg",
        "tasks": [
          { "id": 1, "title": "Hydratation", "done": true }
        ]
      },
      {
        "id": 3,
        "name": "Hamza",
        "image":"/photo.jpg",
        "tasks": [
          { "id": 1, "title": "Hydratation", "done": true }
        ]
      }
    ];

const [users,setUsers] = useState([]) ;
useEffect(()=>{
const getAllUsers = localStorage.getItem("habitTracker") 


if(!getAllUsers){
  console.log("object")
localStorage.setItem("habitTracker",JSON.stringify(tasks))
setUsers(tasks)

}else{
  setUsers(JSON.parse(getAllUsers))
}

},[])

const addTask = (task, userName) => {
// console.log(task,userID);
const data = users.map((user) => {
  if(user.name == userName) {
   user.tasks = [...user.tasks ,{ id: user.tasks[user.tasks.length-1].id+1 , title: task , done: false }] 

  }
  return user 
})

setUsers(data)
localStorage.setItem("habitTracker",JSON.stringify(data))
console.log(data)
}

const deleteTask = (userId, taskId) => { 
  const updatedUsers = users.map((user) => {
    if(user.id === userId) {
      user.tasks = user.tasks.filter(task => task.id !== taskId);
    }
    return user;
  });
  
  setUsers(updatedUsers);
  localStorage.setItem("habitTracker", JSON.stringify(updatedUsers));
}

const toggleTask = (userId, taskId) => {
  const updatedUsers = users.map((user) => {
    if(user.id === userId) {
      user.tasks = user.tasks.map(task => {
        if(task.id === taskId) {
          task.done = !task.done;
        }
        return task;
      });
    }
    return user;
  });
  
  setUsers(updatedUsers);
  localStorage.setItem("habitTracker", JSON.stringify(updatedUsers));
}



  return (
    <>

      <Title/>
      <Task users={users} addtask = {addTask} />
      <Cards users = {users} deletetask ={deleteTask} toggletask={toggleTask}/>

    </>
  )
}

export default App
