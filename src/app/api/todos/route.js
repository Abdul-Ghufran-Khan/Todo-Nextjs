const todos = [
    {
        id: 1,
        title: "Todo 1",
        iscompleted: false
    },
    {
        id: 2,
        title: "Todo 2",
        iscompleted: false
    },
    {
        id: 3,
        title: "Todo 3",
        iscompleted: false
    },
    {
        id: 4,
        title: "Todo 4",
        iscompleted: false
    },
    {
        id: 5,
        title: "Todo 5",
        iscompleted: false
    }
];

export async function GET(request) {
    return Response.json({
        data: todos,
        mess: "Data Fetched Successfully"
    })
};

export async function POST(request) {
    const data = await request.json();
    const obj = {
        id: todos.length + 1,
        ...data,
        iscompleted: false
    }
    todos.push(obj)
    return Response.json({
        data: todos,
        mess: "Data Added Successfully"
    })
}

export async function PUT(request) {
    const data = await request.json();
    const todoIndex = todos.findIndex((todo) => todo.id === data.id);
    todos[todoIndex] = data;
    return Response.json({
        data: todos,
        mess: "Todo updated Successfully"
    })
}

