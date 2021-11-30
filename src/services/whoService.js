
const WHO_API = 'http://localhost:4000/rest/who';
// const WHO_API = 'https://safe-thicket-27885.herokuapp.com/rest/who';


export const fetchAllWho = () =>
    fetch(WHO_API)
        .then(response => response.json());

export default fetchAllWho;