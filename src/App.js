import './App.css';
import Addtask from './components/Addtask';
import Listtask from './components/Listtask';
import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Listtask/>
      <Addtask/>
    </div>
  );
}

export default App;
