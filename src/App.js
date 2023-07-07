import './App.css';
import {Header} from './component/Header';
import {Footer} from "./component/Footer";
import {CreateToDoItem} from "./component/CreateToDoItem";
import {useSelector, useDispatch} from 'react-redux';


function App() {
    // const dispatch = useDispatch()
    const toDo = useSelector(state => {console.log(state)})

  return (
      <div className="App">
        <Header />
        <CreateToDoItem />

        <Footer />
      </div>
  );
}

export default App;
