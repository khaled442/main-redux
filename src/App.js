// import { Provider } from "react-redux";
import { Provider } from "react-redux";
import "./App.css";
import store from "./Redux/Store";
import AddTask from './Components/AddTask/AddTask'
import TaskList from './Components/TaskList/TaskList'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
