import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples/components/index";
import APIExamples from "./APIExamples";
import Movies from "./Movies";

const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <Link to="/a9/twitter/home">
                Twitter
            </Link>
            <Movies/>
            {/*<APIExamples/>*/}
            {/*<ReduxExamples/>*/}
            <Link to="/a7/twitter/home">
                Build A7
            </Link>
            <br/>
            <Link to="/a6/hello">
                Hello A6
            </Link> |
            <Link to="/a6/twitter/explore">
                Build A6
            </Link>
            <TodoList/>
            <ConditionalOutput/>
            <Classes/>
            <Styles/>
        </>
    )
};

export default Practice;

