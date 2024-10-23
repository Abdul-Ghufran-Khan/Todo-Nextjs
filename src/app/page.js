import TodoForm from "@/Components/TodoForm";


export default async function Home() {
  let res = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  res = await res.json()
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-6xl font-bold text-center">Todos</h1>
      <TodoForm/>
      {
        res.data.map((todo) => (
          <p key={todo.id} className="border border-black p-6 rounded-md w-2/3 mx-auto my-1">{todo.title}</p>
        ))
      }
    </div>
  );
}
