
import { useRef} from "react";
import { IoBagAddOutline } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  // const [todoName,SetTodoName]=useState('');
  // const [dueDate,setDueDate]=useState('');

  // const handleNameChange=(Event)=>{
  //   SetTodoName(event.target.value);
  // }

  // const handleDateChange=(Event)=>{
  //   setDueDate(event.target.value);
  // }
  const todoNameElement = useRef();
    const todoDateElement = useRef();
  const handleAddButtonClicked = (event) => {
   
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate= todoDateElement.current.value;
    console.log(`${todoName} Due date:${todoDate}`);
    onNewItem(todoName, todoDate);

    //  setDueDate("");
    //  SetTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          {/* input for item */}
          <input
            type="text"
            placeholder="Enter todo here"
            // value={todoName}
            // onChange={handleNameChange}
            ref={todoNameElement}
          />
        </div>
        {/* input for date */}
        <div className="col-4">
          <input
            type="date"
            // value={dueDate}
            // onChange={handleDateChange}
            ref={todoDateElement}
          />
        </div>
        <div className="col-2">
          <button type="button " className="btn btn-success kg-button">
            <IoBagAddOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;