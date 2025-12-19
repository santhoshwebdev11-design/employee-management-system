import { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTasktitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [tsakDecription, setTsakDecription] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [catagory, setCatagory] = useState("");

  const [newtask, setNewTask] = useState({});

  const onSumbitHandler = (e) => {
    e.preventDefault();
    setNewTask({taskTitle,taskDate,tsakDecription,asignTo,catagory,active:true,newTask:true,completed:true,failed:true});
    console.log(newtask);
    const data = JSON.parse(localStorage.getItem('employees'))
    console.log(data);

    data.forEach((elem)=>{
      if(asignTo == elem.firstname){
       elem.tasks.push({ taskTitle, taskDate, tsakDecription, asignTo, catagory, active:true, newTask:true, completed:true, failed:true });

        elem.taskNumbers.active = elem.taskNumbers.active + 2
        console.log(elem);
        
       
      }
    })
  localStorage.setItem("employees",JSON.stringify(data))
    
    

  };
  return (
    <div className="bg-zinc-900 p-5 mt-7 rounded text-white">
      <form
        onSubmit={(e) => onSumbitHandler(e)}
        className="flex flex-wrap items-start justify-between w-full"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
            value={taskTitle}
            onChange={(e)=>{
              setTasktitle(e.target.value)
            }}
              className="text-sm px-2 py-1 boder bg-transparent rounded border-gray-400 w-full"
              type="text"
              placeholder="make a ui design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
            value={taskDate}
            onChange={(e)=>{
              setTaskDate(e.target.value)
            }}
              className="text-sm px-2 py-1 boder bg-transparent rounded border-gray-400 w-full"
              type="date"
              name=""
              id=""
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
            value={asignTo}
            onChange={(e)=>{
              setAsignTo(e.target.value)
            }}
              className="text-sm px-2 py-1 boder bg-transparent rounded border-gray-400 w-full"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">catagory</h3>
            <input
            value={catagory}
            onChange={(e)=>{
              setCatagory(e.target.value)
            }}
              className="text-sm px-2 py-1 boder bg-transparent rounded border-gray-400 w-full"
              type="text"
              placeholder="design ,dev,etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col">
          <h3 className="text-sm text-gray-300 mb-0.5">Decription</h3>
          <textarea
          value={tsakDecription}
          onChange={(e)=>{
            setTsakDecription(e.target.value)
          }}
            className="w-full h-44 bg-transparent outline-none border border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="bg-emerald-500 mt-2 rounded-2xl active:bg-emerald-800">
            create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
