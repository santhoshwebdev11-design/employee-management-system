import { useContext,  useEffect,  useState } from "react";
import Login from "./componets/auth/Login";
import AdminDashboard from "./componets/dashboard/AdminDashboard";
import EmployeDashboard from "./componets/dashboard/EmployeDashboard";
import  { AuthContext } from "./context/AuthContextProveder";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState('')

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      console.log(userData);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(userData.role)
      setLoggedInUserData(userData.data)
      
      
    }
    
  },[])

  const authData = useContext(AuthContext)

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === '123') {
            setUser("admin");
            localStorage.setItem('loggedInUser' ,JSON.stringify({role:'admin'}))
   

    } else if (authData) {
            const employee = authData.employees.find((e)=>email ==e.email && e.password == password)
            if(employee){
              setUser("employee");
              setLoggedInUserData(employee)
            // localStorage.setItem('loggedInUser' ,JSON.stringify({role:'employee'}))
            localStorage.setItem('loggedInUser' ,JSON.stringify({role:'employee',data:employee}))

      }
    } else {
            alert("invalid Credantial");
    }
  };


  
 
  
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser}/> :(user == 'employee' ?<EmployeDashboard changeUser={setUser} data={loggedInUserData}/>:null)}
    </div>
  );
};

export default App;
