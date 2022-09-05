const createUserAction = { type:"IS_REGISTRED" } 

export const createUser = (payload) => {

  const {email, password} = payload

  return (dispatch) => {

    const options = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    }

    fetch(`http://localhost:3350/user/register`, options).then((res)=> res.json()).then((res)=>{
      dispatch(createUserAction)
    })
  }
}



