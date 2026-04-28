import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
function App() {
  // const intialTodoItems = [
  //   {
  //     todoName: "Buy Milk",
  //     dueDate: "4/10/2024",
  //   },
  //   {
  //     todoName: "Go to collage",
  //     dueDate: "4/11/2024",
  //   },
  //   { todoName: "Go to gym", dueDate: "4/12/2024" },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handelNewItem = (itemName, itemDueDate) => {

    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);


  setTodoItems((curr)=>[...curr, { todoName: itemName, dueDate: itemDueDate },]);
  };

   const handleIDeleteItem=(todoItemName)=>{
    const newTodoItem=todoItems.filter(item=>item.todoName!==todoItemName);
    setTodoItems(newTodoItem);
    console.log(`Item Deleted:${todoItemName}`);

   }
  return (
    <center className="class-container">
      <AppName />
      <AddTodo onNewItem={handelNewItem} />
      { todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
      <TodItems todoItems={todoItems} onDeleteClick={handleIDeleteItem}></TodItems>
    </center>
  );
}

export default App;
