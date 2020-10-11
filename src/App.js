import React from 'react'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' ></Route>
        
      </Switch>
    </BrowserRouter>
    
  );
}
export default App;
