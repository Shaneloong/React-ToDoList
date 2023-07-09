import {useDispatch, useSelector} from "react-redux";
import {ToDoItem} from "./ToDoItem";
import {CreateToDoItem} from "./CreateToDoItem";
import {useState} from "react";

export function DisplayToDoList(props) {
	const [sort, setSort] = useState("active");
	const dispatch = props.dispatch; // This hook returns a reference to the dispatch function from the Redux store.
	const toDoList = props.toDoList;
	return (
		<div className="displaytodos">
			<div className="buttons">

				<button
					onClick={() => setSort("active")}
				>
					Active
				</button>

				<button
					onClick={() => setSort("asc")}
				>
					Ascending
				</button>

				<button
					onClick={() => setSort("desc")}
				>
					Descending
				</button>

				<button
					onClick={() => setSort("completed")}
				>
					Completed
				</button>


				<button
					onClick={() => setSort("all")}
				>
					All
				</button>

			</div>

			<div className={"d-flex justify-content-start align-items-start"}>
				{
					sort === 'all' && toDoList.map((item) => (

							<ToDoItem key={item.id} item={item} dispatch={dispatch} />
						)
					)
				}

				{
					sort === 'completed' && toDoList.map((item) => (

							item.completed === true && <ToDoItem key={item.id} item={item} dispatch={dispatch} />
						)
					)
				}

				{
					sort === 'active' && toDoList.map((item) => (
							item.completed === false && <ToDoItem key={item.id} item={item} dispatch={dispatch} />
						)
					)
				}

				{
					sort === 'asc' && toDoList.sort((a, b) => a.item.localeCompare(b.item)).map((item) => (
							item.completed === false && <ToDoItem key={item.id} item={item} dispatch={dispatch} />
						)
					)
				}

				{
					sort === 'desc' && toDoList.sort((a, b) => b.item.localeCompare(a.item)).map((item) => (
							item.completed == false && <ToDoItem key={item.id} item={item} dispatch={dispatch} />
						)
					)
				}
			</div>
		</div>
	)
}