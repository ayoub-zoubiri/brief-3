import React from 'react';

const ListOfTask = ({ routines, deleteTask, toggleTask, userId }) => {
  return (
    <div className="flex flex-col items-center justify-between mt-7">
      {routines.map((routine) => (
        <div 
          key={routine.id} 
          className="flex items-center justify-between w-70 h-[50px] bg-white rounded-[10px] border border-[#5C63F9] hover:shadow-xl px-2 my-2 hover:scale-[1.01] transition-all duration-400 ease-in-out"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-[19px] pl-2">{routine.title}</h1>
          </div>
          <div className="flex items-center justify-between">
            {routine.done ? (
              // If done - show cancel button (X)
              <button 
                className="py-0.5 px-1.5 bg-white rounded-[10px] border border-[#E0B43B] cursor-pointer shadow-xl mx-[1.5px] hover:bg-[#f2da99]"
                onClick={() => toggleTask(userId, routine.id)}
                title="Marquer comme non terminé"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E0B43B"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
              </button>
            ) : (
              // If not done - show done button (checkmark)
              <button 
                className="py-0.5 px-1.5 bg-white rounded-[10px] border cursor-pointer border-[#4EB337] mx-[1.5px] hover:bg-[#b0dda6]"
                onClick={() => toggleTask(userId, routine.id)}
                title="Marquer comme terminé"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4EB337"><path d="m381-240 424-424-57-56-368 367-169-170-57 57 227 226Zm0 113L42-466l169-170 170 170 366-367 172 168-538 538Z"/></svg>
              </button>
            )}
            <button 
              className="py-0.5 px-1.5 bg-white rounded-[10px] border cursor-pointer border-[#FE484D] shadow-xl mx-[1.5px] hover:bg-[#faa4a7]"
              onClick={() => deleteTask(userId, routine.id)}
              title="Supprimer la tâche"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FE484D"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfTask;