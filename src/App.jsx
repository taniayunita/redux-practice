import "./assets/style/style.css";
import AddContact from "./pages/contacts/AddContact";
import EditContact from "./pages/contacts/EditContact";
import ListContacts from "./pages/ListContacts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./pages/Counter";
import AddTodo from "./todo/component/AddTodo";
import TodoList from "./todo/component/TodoList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ListContacts />
            {/* <Counter /> */}
          </Route>
          <Route  path="/counter">
            <Counter />
          </Route>
          <Route  path="/todo">
            <AddTodo />
            <TodoList />
          </Route>
          <Route path="/edit-contact">
            <EditContact />
          </Route>
          <Route path="/add-contact">
            <AddContact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
