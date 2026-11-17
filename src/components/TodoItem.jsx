function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li className={todo.done ? "is-done" : ""}>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
                aria-label={`Виконано: ${todo.text}`}
            />
            <span className="text">{todo.text}</span>
            <span className="meta">
                Термін: {new Date(todo.due + "T12:00:00").toLocaleDateString("uk-UA")}
            </span>
            <button type="button" onClick={() => onDelete(todo.id)}>
                Видалити
            </button>
        </li>
    );
}
export default TodoItem;