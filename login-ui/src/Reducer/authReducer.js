const INITIAL_STATE = {
    data: {},
    auth: false,
    loading: false,
    error: false,
}

function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'IS_AUTH':
            return {...state, auth:true, data:action.payload}
        case 'CLEAN':
            return {...state, auth:false, data:{}}
        case 'LOADING_AUTHORIZATION':
            return {...state, loading:true}
        case 'NOT_AUTH':
            return {...state, error:true}
        default:
            return state
    }
}

export default authReducer