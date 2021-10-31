// import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './components/a6/Build/explore.css'
import  './components/a6/Build/bookmarks.css'
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a7/Practice/index";
import Build from "./components/a6/Build/index";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import {BrowserRouter, Route} from "react-router-dom";
// import who from "./reducers/who";
// import tweets from "./reducers/tweets";
// import {combineReducers, createStore} from "redux";
// import {Provider} from "react-redux";
// import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen";

function App() {

    // const reducer = combineReducers({tweets: tweets, who})
    // const store = createStore(reducer);
        return (
          <BrowserRouter>
              <div className="container-fluid">
                  <Route path="/a6/hello" exact={true}>
                      <HelloWorld/>
                  </Route>
                  {/*<Route path={["/", "/a6", "/a6/practice"]} exact={true}>*/}
                  {/*    <Practice/>*/}
                  {/*</Route>*/}
                  <Route path="/a6/build" exact={true}>
                      <Build/>
                  </Route>
                  <Route path="/a6/twitter/explore" component={Build}/>
                  <Route path="/a6/twitter/home" component={HomeScreen}/>

                  <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                      <Practice/>
                  </Route>
                  {/*<Route path="/a7/twitter/home" component={HomeScreen}/>*/}
                  {/*<Route path="/a7/twitter/home" component={ExploreScreen}/>*/}

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
