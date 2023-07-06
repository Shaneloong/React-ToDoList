import './App.css';
import {Header} from './component/Header';
import {Footer} from "./component/Footer";
import {CreateToDoItem} from "./component/CreateToDoItem";



function App() {
  return (
      <div className="App">
        <Header />
        <CreateToDoItem />
        <Footer />
      </div>
  );
}

export default App;
