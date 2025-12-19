import { useContext } from "react"
import { AuthContext } from "../../context/AuthContextProveder"


const AllTask = () => {
  const authData = useContext(AuthContext)
  
  
  return (
    <div  className='bg-zinc-900 p-5  mt-10  '>
      <div className='bg-red-400  mb-2 py-2 px-4 flex justify-between rounded font-bold' >
                <h2 className="w-1/5 ">Employee Name</h2>
                <h2  className="w-1/5 ">New Tasks</h2>
                <h2  className="w-1/5 ">Active tasks</h2>
                <h2  className="w-1/5 ">Completed Tasks</h2>
                <h2  className="w-1/5 ">Failed tasks</h2>
      </div>
      <div id="Alltask">
         {authData.employees.map(function (elem,i){
        return <div className='bg-transparent  mb-2 py-2 px-4 flex justify-between rounded border-2 border-blue-200 'key={i} >
                <h2  className="text-xl font-medium w-1/5 text-white">{elem.firstname}</h2>
                <h2  className="text-xl font-medium w-1/5 text-blue-500">{elem.taskNumbers.newTask}</h2>
                <h2  className="text-xl font-medium w-1/5 text-amber-300">{elem.taskNumbers.active}</h2>
                <h2   className="text-xl font-medium w-1/5 text-green-400">{elem.taskNumbers.completed}</h2>
                <h2  className="text-xl font-medium w-1/5 text-red-400">{elem.taskNumbers.failed}</h2>
               </div>
      })}
      </div>
      
      
     
    </div>
  )
}

export default AllTask