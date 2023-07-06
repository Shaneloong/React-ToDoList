import {Fab, Zoom} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
export function CreateToDoItem() {
	const [isFocus, setFocus] = useState(false);
	const [todo, setToDo] = useState("");

	function submitNote(event){
		event.preventDefault();

	}
	return (
		<div>
			<form className="create-note">
				{isFocus && (
					<input
						name="title"
						onChange={ console.log("changed")}
						value={todo}
						placeholder="To Do"
					/>
				)}
				<input name="insertToDoList" className="note" />
				<Zoom in={isFocus}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	)
}