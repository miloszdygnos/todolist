import {Todo, TodosProps} from "../types";


export default function Todos(props: TodosProps) {
    const { todos, deleteTodo, toggleTodoActive, editTodo, handleComplete} = props;

   

    return(
        <div className="todosContainer">
            {todos.map((element: Todo) => {
                return(
                    <div className={element.isActive ? "todosContainer__todo todosContainer__todo__active" : "todosContainer__todo"} key={element.id}
                        onClick={() => toggleTodoActive(element.id)}
                            >
                        <div className="todosContainer__todo__flexBox">
                            <h2 className={element.isComplete ? "todosContainer__todo--flexBox__title todosContainer__todo--flexBox__title--completed" : "todosContainer__todo--flexBox__title"}>{element.title}</h2>
                            <p className={element.isComplete ? "todosContainer__todo--flexBox__title todosContainer__todo--flexBox__title--completed" : "todosContainer__todo--flexBox__title"}>{element.text}</p>
                        </div>
                        <div className="todosContainer__todo--flexBox">
                            <button className="todosContainer__todo__button"
                                onClick={() => deleteTodo(element.id)}
                            >delete</button>
                            <button className="todosContainer__todo__button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleComplete(element.id)
                                }}
                            >
                                complete
                            </button>
                            {element.isActive ? <button className="todosContainer__todo__button" 
                                onClick={() => editTodo(element.id)}
                            >
                                edit
                            </button> : ""}
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}