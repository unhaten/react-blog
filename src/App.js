import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
//! npx json-server --watch data/db.json --port 8000

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/create">
                            <Create></Create>
                        </Route>
                        <Route path="/blogs/:id">
                            {/* //! sending :id parameter to BlogDetails in order to use useParams */}
                            <BlogDetails></BlogDetails>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
