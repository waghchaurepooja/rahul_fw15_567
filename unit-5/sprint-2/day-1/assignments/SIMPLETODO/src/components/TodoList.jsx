
import { TodoItem } from "./TodoItem";
const TodoList = (props) =>{
    
    return (
        <div className = "AllTodo">
            {props.AllTodo.map((element) =>{

                return (

                    <TodoItem Todoitem = { element } statusfn = {props.statusfn} />

                )

            })}
        </div>
    )
}

export { TodoList }