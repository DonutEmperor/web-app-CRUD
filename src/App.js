import logo from './logo.svg';
import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import Update from './components/update/update';
import Delete from './components/delete/delete';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 

function App() {
  return (
    <Router>
    <div className="main">
      <div>
        <h2>Test Assesment</h2> 
      </div>

      <div>
      <Route path = '/create' component = {Create}/>
        
      </div>
      
      <div> 
        <Route path ='/read' component={Read}/>
      </div>

      <Route path = '/update' component = {Update}/>
      <Route path = '/delete' component = {Delete}/>
    </div>
    </Router>
  );
}

export default App;
