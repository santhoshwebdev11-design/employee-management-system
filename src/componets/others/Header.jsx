


const Header = ({data,changeUser}) => {
  
  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','');
    changeUser('')
    

    // window.location.reload()
  }
  return (
    <div className="flex justify-between items-end text-white">
      <h1 className="text-2xl font-medium">Heloo <br /><span className="text-3xl font-semibold">{data?.firstname} 😊</span></h1>
      <button onClick={logOutUser} className="bg-red-500 text-lg font-medium px-5 py-2 rounded-sm hover:bg-red-700 active:bg-red-800">log out</button>
      
    </div>
  )
}

export default Header