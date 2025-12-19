import Header from "../others/Header"
import TaskListNumbers from "../others/TaskListNumbers"
import TaskLIst from "../Task-list/TaskLIst"


const EmployeDashboard = (props) => {
 
  
  return (
    <div>
      <div className="p-20 bg-zinc-900 h-screen">
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data}/>
        <TaskLIst data={props.data}/>
      </div>
    </div>
  )
}

export default EmployeDashboard