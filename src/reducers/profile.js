import owner from './data/profile.json';

const initialState = {
    profile: owner
};

const profile = (state = initialState, action) => {
    switch (action.type) {
        case 'fetch-profile':
            return {
                ...state,
                profile: action.profile
            }
        case 'edit-profile':
            // console.log('edit-profile')
            // console.log(action.profile)
            return {
                ...state,
                profile: action.profile
            }
        case 'cancel-edit':
            return state;
        default:
            return state;
    }
};

export default profile;