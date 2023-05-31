import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
//! npx json-server --watch data/db.json --port 8000

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <div className="content">
                <Home></Home>
            </div>
        </div>
    );
}

export default App;
