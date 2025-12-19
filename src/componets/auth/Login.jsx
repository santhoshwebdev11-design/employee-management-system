import { useState } from "react";

const Login = ({handleLogin}) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('')

  const sumbitHandler=(e)=>{
    e.preventDefault()
    handleLogin(email,password)
    console.log('email:' + email);
    console.log('password:' + password);
    setEmail('')
    setPassword('')
    
  }
  return (
    <div className="flex  items-center justify-center h-screen w-screen">
      <div className="border-2 border-emerald-600 rounded-3xl">
        <form  onSubmit={(e)=>{
            sumbitHandler(e)
        }}
        className="flex flex-col items-center justify-center p-20">
          <input
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
            className="text-white text-xl bg-transparent outline-none border-2 border-emerald-600 px-5 py-3 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="enter your email"
          />
          <input
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
            className="text-white text-xl bg-transparent outline-none border-2 border-emerald-600 px-5 py-3 rounded-full placeholder:text-gray-400 mt-5"
            type="password"
            placeholder="enter your password"
          />
          <button className="text-xl text-white outline-none border-2 border-none bg-emerald-600 px-5 py-3 rounded-full mt-3 hover:bg-emerald-700 active:bg-emerald-800 ">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
