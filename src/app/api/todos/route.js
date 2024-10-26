const todos = [];

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

export async function DELETE(request) {
    const data = await request.json();
    const todoIndex = todos.findIndex((todo) => todo.id === data.id);
    todos.splice(todoIndex, 1);
    return Response.json({
        data: todos,
        mess: "Todo Delete Successfully"
    })
}

