import React,{useState} from "react";


const Task = ({ users ,addtask }) => {
const [task , setTask ] = useState("")
const [selectuser , setSuser ] = useState("")


  return (
      <form onSubmit = { (e) => { 
        e.preventDefault()
        
        if(task.trim() && selectuser) {
          addtask(task,selectuser)
          setTask("")
          setSuser("")
        }
        
        }} className="flex items-centre justify-between mx-auto my-20 px-65">
      <input
      onChange = {(e)=> setTask(e.target.value)} 
        type="text"
        value={task}
        className="w-[556px] h-[70px] border-2 rounded-lg border-[#5C63F9] placeholder:pl-10 placeholder:text-[24px] hover:shadow-xl hover:scale-[1.02] transition-all duration-400 ease-in-out pl-10 cursor-pointer"
        placeholder="Nouvelle routine ..."
      />
      <button
        type="submit"
        className="bg-[#5C63F9] w-[176px] h-[70px] border-2 rounded-lg border-[#5C63F9] text-[24px] text-white hover:shadow-xl hover:scale-[1.02] transition-all duration-400 ease-in-out cursor-pointer"
      >
        Ajout
      </button>
      <select onChange = {(e)=> setSuser(e.target.value)} value={selectuser} className="bg-[#ffffff] w-[233px] h-[70px] border-2 rounded-lg border-[#5C63F9] text-[24px] px-10  hover:shadow-xl hover:scale-[1.02] transition-all duration-400 ease-in-out cursor-pointer">
        <option value="">Sélection</option>
        {users.map((user) => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>

      
    </form>
  );
};

export default Task;