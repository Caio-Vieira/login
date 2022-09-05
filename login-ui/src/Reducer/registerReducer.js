const INITIAL_STATE = {
    success: false,
    loading: false,
    error: false,
}

function registerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'IS_REGISTRED':
            return {...state, success:true}
        case 'LOADING_REGISTRED':
            return {...state, loading:true}
        case 'NOT_REGISTRED':
            return {...state, error:true}
        default:
            return state
    }
}

export default registerReducer