import AcceptTask from "./AcceptTask";
import CompletTask from "./CompletTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskLIst = ({data}) => {
  
  
  return (
    <div id="TaskList" className=" w-full h-[55%] mt-20 py-5 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto ">
     {data.tasks.map((elem,i)=>{

    if(elem.newTask){
      return <NewTask key={i} data={elem}/>
    }

    if(elem.active){
      return <AcceptTask key={i} data={elem}/>
    }

    if(elem.completed){
      return <CompletTask key={i} data={elem}/>
    }

    if(elem.failed){
      return <FailedTask key={i} data={elem}/>
    }
    
      
     })}


      
     
      
      
    </div>
  );
};

export default TaskLIst;
