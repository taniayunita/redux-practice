import "./assets/style/style.css";
import Profile from "./component/Profile";
import Login from "./component/Login";
import ChangeColor from "./component/ChangeColor";
import AddContact from "./pages/contacts/AddContact";
import EditContact from "./pages/contacts/EditContact";
import Contact from "./component/Contact";
import ListContacts from "./pages/ListContacts";
import DropdownMenu from "./component/DropdownMenu";
import FormContact from "./component/FormContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ListContacts />
          </Route>
          <Route path="/edit-contact">
            <EditContact />
          </Route>
          <Route path="/add-contact">
            <AddContact />
          </Route>
        </Switch>
        {/* <Profile />
      <Login />
      <ChangeColor /> */}
        {/* <AddContact /> */}
        {/* <EditContact /> */}
        {/* <Contact /> */}

        {/* <DropdownMenu /> */}
        {/* <FormContact /> */}
      </div>
    </Router>
  );
}

export default App;
