import Todo from './Todo'

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!',
    "One more field!"
];

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h2>To Do List</h2>
            <ul>
                {DUMMY_TODOS.map((toDoItem) => (
                    <Todo text={toDoItem} key={toDoItem}/>
                ))}
            </ul>
        </div>
    );
}
