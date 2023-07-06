import {Fab, Zoom} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
export function CreateToDoItem() {
	const [isFocus, setFocus] = useState(false);
	const [todo, setToDo] = useState("");

	function SubmitToDo(event){
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