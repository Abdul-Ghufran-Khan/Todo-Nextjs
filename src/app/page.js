import ListItem from "@/Components/Listitem";
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
          <ListItem todo={todo} key={todo.id}/>
        ))
      }
    </div>
  );
}
