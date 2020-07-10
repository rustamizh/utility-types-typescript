//Partial<T>

interface Todo {
    title: string;
    description: string;
}

const todo = {
    title: 'organize desk',
    description: 'clear clutter',
};

type optionalTodo = Partial<Todo>

const partialTodo = {
    description: 'throw out trash',
};