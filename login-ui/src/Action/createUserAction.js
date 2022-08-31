const createUserAction = (value)=> { return { type:"IS_AUTH", payload: value } }

export const createUser = (payload) => {

  const {email, password} = payload

  return (dispatch) => {

    const options = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    }

    fetch(`http://localhost:3349/user/register`, options).then((res)=> res.json()).then((res)=>{
      dispatch(createUserAction(res))
    })
  }
}



