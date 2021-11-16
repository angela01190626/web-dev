import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import './components/a7/Build/explore.css';
import './components/a7/Build/bookmarks.css';
import './components/a7/Build/profile.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import Practice from "./components/a8/Practice";
import Build from "./components/a8/Build";
import HelloWorld from "./components/a6/HelloWorld";
import BuildA6 from "./components/a6/Build";
import BuildA7 from "./components/a7/Build";
import A9 from "./components/a9";

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
                <Link to="/a8/practice">A8</Link> |
                <Link to="/a9/practice">A9</Link>
                <Route path="/a9">
                    <A9/>
                </Route>
                <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a8/twitter">
                    <Build/>
                </Route>
                <Route path="/a7/twitter">
                    <BuildA7/>
                </Route>
                <Route path="/a6/hello">
                    <HelloWorld/>
                </Route>
                <Route path="/a6/twitter">
                    <BuildA6/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
