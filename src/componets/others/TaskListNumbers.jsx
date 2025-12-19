

const TaskListNumbers = ({data}) => {
  return (
    <div className="flex justify-between items-center gap-5 text-white mt-10">
      <div className="bg-red-600 p-10 w-[45%] rounded-3xl">
         <h1 className="text-3xl font-bold">{data.taskNumbers.newTask}</h1>
         <h3 className="text-xl mt-0.5 font-medium">New Task</h3>
      </div>
       <div className="bg-yellow-600 p-10 w-[45%] rounded-3xl">
         <h1 className="text-3xl font-bold">{data.taskNumbers.active}</h1>
         <h3 className="text-xl mt-0.5 font-medium">active Task</h3>
      </div>
       <div className="bg-emerald-600 p-10 w-[45%] rounded-3xl">
         <h1 className="text-3xl font-bold">{data.taskNumbers.completed}</h1>
         <h3 className="text-xl mt-0.5 font-medium">completed Task</h3>
      </div>
       <div className="bg-blue-600 p-10 w-[45%] rounded-3xl">
         <h1 className="text-3xl font-bold">{data.taskNumbers.failed}</h1>
         <h3 className="text-xl mt-0.5 font-medium">failed Task</h3>
      </div>

    </div>
  )
}

export default TaskListNumbers