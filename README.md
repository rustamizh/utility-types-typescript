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

type OptionalTodo = Partial<Todo>

const partialTodo: OptionalTodo = {
    description: 'throw out trash',
};
```

### Readonly<T>
делает все поля исходного типа полями только для чтения
```javascript
interface Todo {
    title: string;
}

const todo = {
    title: 'Add active users';
}

type ReadonlyTodo = Readonly<Todo>;

const readonlyTodo: ReadonlyTodo = {
    title: 'Delete inactive users',
};

readonlyTodo.title = 'Hello'; // Error: cannot reassign a readonly property
```


### Record<K, T>
конструирует тип объекта, где ключами выступают экземпляры первого типа, а значениями - второго
```javascript
interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const page: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};
```


### Pick<T, K>
конструирует тип из набора ключей исходного типа
```javascript
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
```


### Omit<T, K>
конструирует тип из набора ключей исходного типа, исключая переданные в K свойства
```javascript
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
};
```


### Exclude<T, U>
конструирует тип исключая ряд значений из исходного
```javascript
type SourceType = "'a' | 'b' | 'c';

type T0 = Exclude<SourceType, 'a'>;  
// 'b' | 'c'

type T1 = Exclude<SourceType, 'a' | 'b'>;  
// 'c'

type T2 = Exclude<string | number | (() => void), Function>; 
// string | number
```


### Extract<T, U>
конструирует тип извлекая ряд значений из исходного
```javascript
type SourceType = "'a' | 'b' | 'c';

type T0 = Exclude<SourceType, 'a'>;  
// 'b' | 'c'

type T1 = Exclude<SourceType, 'a' | 'b'>;  
// 'c'

type T2 = Exclude<string | number | (() => void), Function>; 
// string | number
```