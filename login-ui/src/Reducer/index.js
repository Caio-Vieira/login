function LoginReducer(state = false, action) {
    switch (action.type) {
        case 'IS_AUTH':
            return state = true
        case 'NOT_AUTH':
            return state = false
        default:
            return state
    }
}

export default LoginReducer