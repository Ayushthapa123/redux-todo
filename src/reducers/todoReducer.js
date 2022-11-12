
const initialTasks={
    list:[]
};

export const todoReducer=(state=initialTasks,action)=> {

    switch(action.type) {
        case "ADD_TODO":
            const {id,task,description,category}=action.payload;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id:id,
                        task,
                        description,
                        category,
                    }
                ]
            }


        case "UPDATE_TODO":
          
            const {updateindex,updatetask,updatedescription,updatecategory}=action.payload;

            let updatedlist=state.list;
            updatedlist[updateindex].task=updatetask;
            updatedlist[updateindex].description=updatedescription;
            updatedlist[updateindex].category=updatecategory;

            return {
                ...state,
                list:updatedlist
            }

            case "MARK_COMPLETE":
          
                const {markid}=action.payload;
    
                let marklist=state.list;
                marklist[updateindex].task=updatetask;
               
    
                return {
                    ...state,
                    list:updatedlist
                }




        case "READ_TODO":
            return "Thapa";


        case "DELETE_TODO":
            const {deleteid}=action.payload;
            const deleteindex=state.list.findIndex( element => {
                if (element.id == deleteid) {
                  return true;
                }
              });
            
              let deltask=[...state.list];
              deltask.splice(deleteindex,1);

              return {
                ...state,
                list:deltask
              }

        case "DELETEALL_TODO":

              return {
                ...state,
                list:[]
              }
           

        default: 
            return state;
    }

}