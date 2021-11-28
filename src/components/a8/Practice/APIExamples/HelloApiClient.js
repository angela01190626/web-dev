import React, {useEffect, useState} from "react";
const HELLO_API = 'http://localhost:4000/hello';
// const HELLO_API = 'https://safe-thicket-27885.herokuapp.com/hello';

const HelloApiClient = () => {
    const [hello, setHello] = useState('');
    useEffect(() => {
        fetch(HELLO_API)
            .then(response => response.text())
            .then(text => setHello(text));
    }, []);
    return (
        <h1>{hello}</h1>
    );
};
export default HelloApiClient;
