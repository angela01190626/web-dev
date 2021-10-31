import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./ReduxExamples/components/index";

const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <Link to="/a7/home">
                Build A7
            </Link>
            <ReduxExamples/>
            <Link to="/a6/hello">
                Hello A6
            </Link> |
            <Link to="/a6/build">
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

