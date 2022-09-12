const createUserAction = { type:"IS_REGISTRED" } 
const createUserActionError = { type:"NOT_REGISTRED" } 

export const createUser = (payload) => {

  const {username, email, password} = payload

  return (dispatch) => {

    const options = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password })
    }

    fetch(`http://localhost:3350/user/register`, options).then((res)=>res).then((res)=>{
      if (res.status === 200) {
        dispatch(createUserAction)
      }else{
        dispatch(createUserActionError)
      }
    })
  }
}



