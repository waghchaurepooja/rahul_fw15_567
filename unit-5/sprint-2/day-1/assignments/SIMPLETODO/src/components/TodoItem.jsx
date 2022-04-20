
const TodoItem = ({Todoitem, statusfn}) =>{
    
    console.log('Todoitem:', Todoitem)
    return (
        <div className="ItemButton">
            <div className="ItemBox">
                {Todoitem.title}
            </div>
            <div className="ButtonBox">
                <button className={Todoitem.status === true ? "Toggle1" : "Toggle2"} onClick={() =>{
                    statusfn(Todoitem.id);
                }}>{Todoitem.status ? "✔" : "✖"}</button>
            </div>
        </div>
    )
}

export { TodoItem }