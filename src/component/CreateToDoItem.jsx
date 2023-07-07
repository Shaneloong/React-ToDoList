import {Fab, Zoom} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {v4} from 'uuid';
import {addTodo} from "../store/todo/todo.actions";

export function CreateToDoItem() {
	const [isFocus, setFocus] = useState(false);
	const [todo, setToDo] = useState("");
	const dispatch = useDispatch();
	const toDoList = useSelector(() => {})

	function SubmitToDo(event){
		const id = v4();
		const status = 'not_done';
		let toDoItem = {
			id: id,
			status: status,
			toDo: todo,
		};
		setToDo("");
		dispatch(addTodo(toDoItem));

		event.preventDefault();
	}

	function FocusHandling(){
		setFocus(true)
	}

	function HandleChange(event){
		const { name, value } = event.target
		setToDo((prevState) => {
			return value;
		})
	}

	function ResetFocus(){
		setFocus(false)
	}

	return (
		<div>
			<form className="create-note">
				<input
					name="todoItem"
					onFocus={FocusHandling}
					onBlur={ResetFocus}
					onChange={HandleChange}
					value={todo}
					placeholder={"To Do Task"}
				/>
				<Zoom in={isFocus}>
					<Fab onClick={SubmitToDo}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	)
}