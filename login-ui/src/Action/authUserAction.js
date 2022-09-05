export const authUserAction = (value) => { return { type: "IS_AUTH", payload: value } }

export const authUser = (payload) => {

    const { email, password } = payload

    return (dispatch) => {

        const options = {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        }

        fetch(`http://localhost:3350/user/login`, options).then((res) => {
            return res.json()
        }).then((res) => {
            localStorage.setItem('auth', JSON.stringify(res))            
            dispatch(authUserAction(res))
        })
    }
}
