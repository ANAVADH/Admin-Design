
import './App.css';
// import Header from './Components/Layout/Header/header'; 
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Components/home/Home';
import Signup from './Components/signup/Signup';
import Signin from './Components/signin/Signin';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Switch>
        <Route  path='/' exact component={Home} />
        <Route  path='/signin' component={Signin} />
        <Route  path='/signup' component={Signup} />
       </Switch>

     
      
       </BrowserRouter>

    </div>
  );
}

export default App;
