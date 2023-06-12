
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import List from './components/List/List';

const todos=[
  {
    title:'Go to school',
    isCompleted:false
  },
  {
    title:'Buy milk',
    isCompleted:true
  },
  {
    title:'Drive a car',
    isCompleted:false
  }
]
function App() {
  return (
    <div className="App">
      <Input color="red" border="1px solid green" borderRadius="4px"/>
      <Button color="purple" background="lavender">Submit</Button>
      <List data={todos}/>
    </div>
  );
}

export default App;
