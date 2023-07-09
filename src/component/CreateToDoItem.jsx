import AddIcon from '@mui/icons-material/Add';
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../store/todo/todo.actions";
import {v4} from "uuid";
import {DisplayToDoList} from "./DisplayToDoList";

export function CreateToDoItem(props) {
	const [todo, setToDo] = useState("");
	const dispatch = useDispatch();
	const toDoList = useSelector(state => state);

	function SubmitToDo(event){
		event.preventDefault();
		if(todo !== ""){
			dispatch(addTodo({id: v4(), completed: false, item: todo}));
			setToDo("");
		}
		else{
			alert("Please add a To Do Task");
		}
	}

	function HandleChange(event){
		const { name, value } = event.target;
		setToDo(value);
	}

	function HandleKeydown(event){
		if(event.key === "Enter"){
			event.preventDefault();
			SubmitToDo(event);
		}
	}

	return (
		<div>
			<form className="create-note">
				<input
					name="todoItem"
					onChange={HandleChange}
					onKeyDown = {HandleKeydown}
					value={todo}
					placeholder={"To Do Task"}
				/>

				<button onClick={SubmitToDo}>
					<AddIcon />
				</button>

			</form>

			<DisplayToDoList toDoList={toDoList} dispatch={dispatch} />
		</div>
	)
}