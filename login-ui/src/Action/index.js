// import { useDispatch } from "react-redux";
const api = 'http://localhost:3349/user'
// const dispatch = useDispatch()

async function Auth(payload) {

    const {email, password} = payload 

    const options = {
        method: "post",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({email,password})
    }

  const teste = await fetch(`${api}/register`, options)
  const teste2 = await teste.json()

  console.log(teste2);
    // return {
    //     type: "IS_AUTH"
    // }
}

export default Auth


