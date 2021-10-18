import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/a6/Build/explore.css'
import  './components/a6/Build/bookmarks.css'
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice/index";
import Build from "./components/a6/Build/index";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
              <Route path="/a6/hello" exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                  <Practice/>
              </Route>
              <Route path="/a6/build" exact={true}>
                  <Build/>
              </Route>
              <Route path="/a6/twitter/explore" component={Build}/>
              <Route path="/a6/twitter/home" component={HomeScreen}/>
          </div>
      </BrowserRouter>
  );
}
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Welcome to WebDev!!!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


export default App;
