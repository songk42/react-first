import React from "react"
import styles from "TodoItem.module.css"

function TodoItem(props) {
    // a class component that only has markup within the render() method can safely be converted to a function component

	const completeStyle = {
		fontStyle: "italic",
		color: "#595959",
		opacity: 0.4,
		textDecoration: "line-through"
	}

    return (
        <li className={styles.item}>
            <input 
                type="checkbox" 
                className={styles.checkbox}
				checked={props.todo.completed}
                onChange={() => props.handleChangeProps(props.todo.id)}
            />
            <button onClick={() => props.deleteTodoProps(props.todo.id)}>
                Delete
            </button>
			<span style={props.todo.completed ? completedStyle : null}>
            	{props.todo.title}
			</span>
        </li>
    )
}

export default TodoItem