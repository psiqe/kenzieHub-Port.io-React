import { Switch, Route } from "react-router-dom"
import Home from "../pages/Home"
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"

const Routes =()=>{
  return <Switch>
    <Route exact path='/'>
      <Home/>
    </Route>
    <Route exact path='/login'>
      <Login/>
    </Route>
    <Route exact path='/signup'>
      <Signup/>
    </Route>
    <Route exact path='/dashboard'>
      <>
        not found
      </>
    </Route>
  </Switch>
}

export default Routes