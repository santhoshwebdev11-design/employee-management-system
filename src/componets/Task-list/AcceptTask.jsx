
const AcceptTask = ({data}) => {
  return (
    <div className="shrink-0 h-full w-[300px] bg-red-300 rounded-3xl p-5">
      <div className="flex justify-between ">
        <h2 className="bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h2>
        <h3 className="text-sm">{data.date}</h3>
      </div>
      <h2 className="text-2xl font-semibold mt-5">{data.title}</h2>
      <p className="text-sm m-2">{data.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-500 py-1 px-2 text-sm rounded-3xl hover:bg-green-800">mark as completed</button>
        <button className="bg-red-500 py-1 px-2 text-sm rounded-3xl hover:bg-red-800">mark as failed</button>
      </div>
      </div>
  )
}

export default AcceptTask