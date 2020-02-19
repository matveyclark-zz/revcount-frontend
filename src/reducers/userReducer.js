const initialState = {
    username: null,
    userType: null,
    starterEmail: null,
    projects: [],
    selectedProject: null
}

const userReducer = (state = initialState, action) => {

    if(action.type === 'LOGIN_USER') {
        return {
            ...state,
            username: action.payload.username,
            userType: action.payload.userType
        }
    }

    if(action.type === 'ADD_STARTER_EMAIL') {
        return {
            ...state,
            starterEmail: action.payload
        }
    }

    if(action.type === 'SET_PROJECTS') {
        return {
            ...state,
            projects: action.payload
        }
    }

    if(action.type === 'SELECT_PROJECT') {
        return {
            ...state,
            selectedProject: action.payload
        }
    }

    if(action.type === 'LOGOUT_USER') {
        return {
            ...state,
            username: null,
            userType: null
        }
    }

    return state
}

export default userReducer