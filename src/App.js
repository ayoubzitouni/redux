import './App.css';
import Addtask from './components/Addtask';
import Listtask from './components/Listtask';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <Listtask/>
      <Addtask/>
      <Task/>
    </div>
  );
}

export default App;
