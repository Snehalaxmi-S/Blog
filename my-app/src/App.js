import TopBar from "./components/Top/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
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
          {/* {user ? <Home/> : <Register />} */}
        </Route>
        <Route path="/login">
          <Login />
        {/* {user ? <Home/> : <Login />} */}
        </Route>
        <Route path="/write">
        {/* {user ? <Write/> : <Register />} */}
        <Write/>
        </Route>
        <Route path="/settings">
        {user ? <Settings/> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
       
      </Switch>
      
      
    </Router>
  );
}

export default App;
