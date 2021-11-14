import React from "react";
import HelloApiClient from "./HelloApiClient";
import MovieApiClient from "./MovieApiClient";

const APIExamples = () => {
    return(
        <div>
            {/*<h1>Api Examples</h1>*/}
            <MovieApiClient/>
            <HelloApiClient/>
        </div>
    );
};
export default APIExamples;

