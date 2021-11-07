import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import './components/a7/Build/explore.css';
import './components/a7/Build/bookmarks.css';
import './components/a7/Build/profile.css';
import {BrowserRouter, Route} from "react-router-dom";
import Practice from "./components/a8/Practice";
import Build from "./components/a8/Build";
import HelloWorld from "./components/a6/HelloWorld";
import BuildA6 from "./components/a6/Build";
import BuildA7 from "./components/a7/Build";

function App() {
    return (
        <BrowserRouter>
            <div className="container-fluid">
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
