"use client";
import { addtodo } from "@/actions/todo";
import { useRef } from "react";


export default async function TodoForm() {
    const formref = useRef("null")
    return (
        <form ref={formref} action={async (formdata) => {
            await addtodo(formdata);
            formref.current.reset();
        }} className="w-2/3 mx-auto flex gap-2">
        <input
          type="text"
          className="border border-gray-700 p-4 rounded bg-slate-200 flex flex-grow my-1"
          name="todo"
          placeholder="Enter Todo" />
        <input type="submit" className="bg-gray-800 rounded px-8 text-white" value={"Add Todo"} />
      </form>
    )
    
}