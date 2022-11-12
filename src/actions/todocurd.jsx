import uuid from "react-uuid"

export const addTodo=(e,task,description,category)=> {
e.preventDefault();
if(task.length>1) {
    return {
        type:"ADD_TODO",
        payload: {
            id:uuid(),
            task,
            description,
            category,
            completed:false,
        }
    }
}else {
    alert("Empty task can't be added")
}
}

export const updateTodo=(e,updateindex,updatetask,updatedescription,updatecategory)=> {
    e.preventDefault();
  
        
        
            return {
                type:"UPDATE_TODO",
                payload: {
                    updateindex,
                    updatetask,
                    updatedescription,
                    updatecategory,
                }
            
            }
        
    }


export const markComplete=(id)=> {
    return {
        type:"MARK_COMPLETE",
        payload: {
            markid:id,
        }
    }
}



export const deleteTodo=(id)=> {
    let deleteid=id;
    if(deleteid) {
        return {
            type:"DELETE_TODO",
            payload: {
                deleteid,
            }
        }
    }

  
}

export const DeleteAllTodo=()=> {
    return {
        type:"DELETEALL_TODO",
    }
}
