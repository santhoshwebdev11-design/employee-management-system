import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="shrink-0 h-full w-[300px] bg-blue-300 rounded-3xl p-5">
      <div className="flex justify-between ">
        <h2 className="bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h2>
        <h3 className="text-sm">{data.date}</h3>
      </div>
      <h2 className="text-2xl font-semibold mt-5">{data.title}</h2>
      <p className="text-sm m-2">{data.description}</p>
      <div className="flex justify-center mt-4">
        <button className="bg-red-500 w-full py-1 px-2 text-sm rounded-3xl hover:bg-red-800"> FailedTask</button>
        
      </div>
      </div>
  )
}

export default FailedTask