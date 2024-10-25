"use client";
import { updatetodo } from "@/actions/todo";
import { useState } from "react";


export default function ListItem({ todo }) {
    const [isEdit , setisEdit] = useState(false)
    const [task , settask] = useState("")

    const onComplete = async () => {
        const obj = {...todo};
        obj.iscompleted = !obj.iscompleted;
        await updatetodo(obj);
    }

    const onEdit = async () => {
        if(isEdit){
            let obj = {...todo};
            obj.title = task;
            await updatetodo(obj)
            setisEdit(!isEdit);
            settask("")
        }else{
            setisEdit(!isEdit);
            settask(todo.title)
        }
    }
    
    const onDelete = async () => {}
    
    return (
        <div className={`flex justify-between border border-gray-400 p-4 items-center rounded-md w-2/3 mx-auto my-1
            ${todo.iscompleted ? "bg-green-200" : "bg-slate-200"} `}>
            { isEdit
            ?<input type="text" value={task} onChange={(e) => settask(e.target.value)} className="bg-slate-200 border border-gray-400 rounded-md cursor-pointer p-4 flex flex-grow"/>
            :<p className="cursor-pointer flex flex-grow">{todo.title}</p>
            }
            <button onClick={onComplete} className="bg-fuchsia-200 mx-1 rounded p-2 px-3 text-sm font-semibold">{!todo.iscompleted? "Done" : "Not Done"}</button>
            <button onClick={onEdit} className="bg-blue-200 mx-1 rounded p-2 px-3 text-sm font-semibold">{!isEdit? "Edit":"Update"}</button>
            <button className="bg-red-200 mx-1 rounded p-2 px-3 text-sm font-semibold">Delete</button>
        </div>
    )   
    
}