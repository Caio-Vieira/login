const INITIAL_STATE = {
    data: false,
    loading: false,
    error: false,
}

function registerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'IS_REGISTRED':
            return {...state, data:true}
        case 'LOADING_REGISTRED':
            return {...state, loading:true}
        case 'NOT_REGISTRED':
            return {...state, error:true}
        default:
            return state
    }
}

export default registerReducer