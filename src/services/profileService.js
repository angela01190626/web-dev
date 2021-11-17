// const PROFILE_API = 'http://localhost:4000/api/profile';

const PROFILE_API = 'http://localhost:4000/rest/profile';

export const fetchProfile = () =>
    fetch(PROFILE_API)
        .then(response => response.json());

export const findProfileById = (id) =>
    fetch(`${URL}/${id}`)
        .then(response => response.json());

export const editProfile = (dispatch, profile) =>
    fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response =>
            dispatch({
                type: 'edit-profile',
                profile
            }));
