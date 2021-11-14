const PROFILE_API = 'http://localhost:4000/api/profile';

export const fetchProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'fetch-profile',
                profile
            })
        );

export const editProfile = (dispatch, profile) =>
    fetch(`${PROFILE_API}`, {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'edit-profile',
                profile
            }));
