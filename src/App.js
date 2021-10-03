import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/common";
import { PostList, TagList } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/posts">
            <PostList />
          </Route>
          <Route path="/tags">
            <TagList />
          </Route>
          <Route path="/">
            <PostList />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
