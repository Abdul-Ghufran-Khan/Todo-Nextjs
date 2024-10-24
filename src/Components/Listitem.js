export default function ListItem({ todo }) {
    return (
        <div className={`flex justify-between border border-gray-600 p-4 items-center rounded-md w-2/3 mx-auto my-1
            ${todo.iscompleted ? "bg-green-200" : "bg-slate-200"} `}>
            <p className="flex flex-grow">{todo.title}</p>
            <button className="bg-fuchsia-200 mx-1 rounded p-2 px-3 text-sm font-semibold">{!todo.iscompleted? "Done" : "Not Done"}</button>
            <button className="bg-blue-200 mx-1 rounded p-2 px-3 text-sm font-semibold">Edit</button>
            <button className="bg-red-200 mx-1 rounded p-2 px-3 text-sm font-semibold">Delete</button>
        </div>
    )   
    
}