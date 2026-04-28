import TodoItem from "./TodoItem";
const todItems=({todoItems, onDeleteClick})=>{
    return(
        <div className="item-container">
            {todoItems.map((item)=>(
                <TodoItem 
                
                key={item.todoName} 
                todoName={item.todoName} 
                todoDate={item.dueDate}
               onDeleteClick={onDeleteClick} ></TodoItem>
            ))}
        </div>  
    );
};

export default todItems;