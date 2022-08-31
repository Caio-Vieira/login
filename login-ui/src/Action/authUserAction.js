const authUserAction = (value) => { return { type: "IS_AUTH", payload: value } }

export const authUser = (payload) => {

    const { email, password } = payload

    return (dispatch) => {

        const options = {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        }

        fetch(`http://localhost:3349/user/login`, options).then((res) => {
            return res.json()
        }).then((res) => {
            console.log(res);
            dispatch(authUserAction(res))
        })
    }
}



