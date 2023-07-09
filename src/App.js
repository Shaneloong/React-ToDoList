import './App.css';
import {Header} from './component/Header';
import {Footer} from "./component/Footer";
import {CreateToDoItem} from "./component/CreateToDoItem";
import {useSelector} from 'react-redux';
import {ToDoItem} from "./component/ToDoItem";
import {useState} from "react";
import {DisplayToDoList} from "./component/DisplayToDoList";




function App() {

    let todo = useSelector(state => state)
    console.log(todo)

  return (
      <div className="App">
        <Header />
        <CreateToDoItem />
        <Footer />
      </div>
  );
}

export default App;
