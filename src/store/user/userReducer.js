
import { produce } from 'immer';

const initialState = {
    user: {}
};

const userReducer = produce((state, action) => {
    switch (action.type) {
    case 'setUser':
        state.user = action.payload;
        break;
    
    case 'clearUser':
        state.user = {};
        break;

    case 'getUser':
        return state.user;

    case 'getUserName':
        return state.user.name || '';

    case 'isUserExist':
        return !!state.user && Object.keys(state.user).length > 0;

    default:
        return state;
    }
}, initialState);

export default userReducer;
