import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import {useDispatch} from "react-redux";
import {completeTodo, removeTodo, updateTodo} from "../store/todo/todo.actions";
import {useRef} from "react";
export function ToDoItem(props) {
	const item = props.item;

	const dispatch = props.dispatch;

	const inputRef = useRef(true); // Used to refer to the DOM element on which the ref attribute is set.

	function changeFocus(){
		inputRef.current.disabled = false;
		inputRef.current.focus();
	}

	function Reset(){
		inputRef.current.disabled = true;
	}

	const update = (id, value, e) => {
		if (e.which === 13) {
			dispatch(updateTodo({
				id: id,
				item: value,
				completed: false
			}))
		}
	}

	return (

			<li
				key={item.id}
				className="card"
			>
		  <textarea
			  ref={inputRef}
			  disabled={inputRef}
			  defaultValue={item.item}
			  onKeyDown={(e) => update(item.id, inputRef.current.value, e)}
			  onBlur={Reset}
			  style={{ background: item.completed && "transparent"  }}
		  />
				<div className="d-flex justify-content-end">
					<button className={"btn btn-primary me-2"}  onClick={() => changeFocus()} >
						<AiFillEdit />
					</button>
					{item.completed === false && (
						<button className={"btn btn-success me-2"}
							onClick={() => dispatch(completeTodo(item.id))}
						>
							<IoCheckmarkDoneSharp />
						</button>
					)}
					<button className={"btn btn-danger"}
						onClick={() => dispatch(removeTodo(item.id))} >

						<IoClose />
					</button>

				</div>
				{item.completed && <span className="completed">Done</span>}

			</li>
	)
}