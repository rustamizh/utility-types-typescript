### Partial<T>
преобразует все поля исходного типа в необязательные
```javascript
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
```