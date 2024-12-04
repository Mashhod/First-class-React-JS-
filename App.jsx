import logo from './logo.svg';
import './App.css';
import NewComponent  from './component/newComponent'

function App() {
  return (
    <div className="App">

      <NewComponent frirstName = "ali1" lastName = "ahmed1"/>
      <NewComponent frirstName = "ali2" lastName = "ahmed2"/>
      <NewComponent frirstName = "ali3" lastName = "ahmed3"/>
      <NewComponent frirstName = "ali4" lastName = "ahmed4"/>
      <NewComponent frirstName = "ali5" lastName = "ahmed5"/>
     
    </div>
  );
}

export default App;
