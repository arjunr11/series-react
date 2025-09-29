import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import EditPost from "./Editpost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <Router>
        <Header title="React JS Blog" />
        <DataProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={NewPost} />
            <Route path="/edit/:id" component={EditPost} />
            <Route path="/post/:id" component={PostPage} />
            <Route path="/post" component={NewPost} />
            <Route path="/about" component={About} />
            <Route component={Missing} />
          </Switch>
        </DataProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
