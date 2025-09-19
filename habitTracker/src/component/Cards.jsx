import React from "react";
import Card from "./Card.jsx";

const Cards = ({users ,deletetask, toggletask}) => {
  return (

    <div className="flex items-centre justify-between mx-auto px-65 mb-20" >
     {users.map((u)=>{
return (

      <div key={u.id} >
      <Card  user = {u} deleteTask = {deletetask} toggleTask={toggletask}/>
      </div> )
     })}
     
    </div>
  );
};

export default Cards;
