import { setLocalStorage } from "../../utils/LocalStorage";
import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";

const AdminDashboard = (props) => {
 setLocalStorage()
  
  
  return (
    <div className="h-screen w-full p-10 mt-5 rounded ">
     
      <Header changeUser={props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
