import TopBar from "./components/Top/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Single1 from "./pages/single/Single1";
import Single2 from "./pages/single/Single2";
import Single3 from "./pages/single/Single3";
import Single4 from "./pages/single/Single4";
import Single5 from "./pages/single/Single5";

import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContactUs from "./pages/contactus/ContactUs";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register/>
          
        </Route>
        <Route path="/login">
          <Login />
        
        </Route>
        <Route path="/write">
        
        <Write/>
        </Route>
        <Route path="/settings">
        {user ? <Settings/> : <Register />}
        </Route>
        <Route path="/post/1">
          <Single />
        </Route>
        <Route path="/post/2">
          <Single1 />
        </Route>
        <Route path="/post/3">
          <Single2 />
        </Route>
        <Route path="/post/4">
          <Single3 />
        </Route>
        <Route path="/post/5">
          <Single4 />
        </Route>
        <Route path="/post/6">
          <Single5 />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
       
      </Switch>
      
      
    </Router>
  );
}

export default App;
