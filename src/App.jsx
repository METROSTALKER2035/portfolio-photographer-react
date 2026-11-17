import Header from "./components/Header.jsx";
import TodoForm from "./components/TodoForm.jsx";
import Filters from "./components/Filters.jsx";
import TodoList from "./components/TodoList.jsx";
import Counter from "./components/Counter.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import { initialTodos, FILTERS } from "./data/todos.js";
import { filterTodos } from "./utils.js";

function App() {
    const todos = initialTodos;
    const activeFilter = "all";
    const visibleTodos = filterTodos(todos, activeFilter);
    const doneCount = todos.filter((t) => t.done).length;

    // Вибірка актуальних завдань (не прострочених за датою) для другого ProgressBar
    const today = new Date().toISOString().split("T")[0];
    const actualTodos = todos.filter((t) => t.due >= today);
    const actualDone = actualTodos.filter((t) => t.done).length;

    const handleAdd = (text) => console.log("Додати:", text);
    const handleToggle = (id) => console.log("Перемкнути:", id);
    const handleDelete = (id) => console.log("Видалити:", id);
    const handleFilter = (id) => console.log("Фільтр:", id);

    return (
        <main className="app">
            <Header
                title="Графік зйомок та обробки фото"
                subtitle="Компонентна версія на React (ЛР № 9)"
            />
            <TodoForm onAdd={handleAdd} />
            <Filters
                filters={FILTERS}
                activeId={activeFilter}
                onChange={handleFilter}
            />
            <TodoList
                todos={visibleTodos}
                onToggle={handleToggle}
                onDelete={handleDelete}
            />
            <Counter total={todos.length} done={doneCount} />
            <ProgressBar label="Усі завдання" value={doneCount} max={todos.length} />
            <ProgressBar label="Актуальні (не прострочені)" value={actualDone} max={actualTodos.length} />
        </main>
    );
}

export default App;