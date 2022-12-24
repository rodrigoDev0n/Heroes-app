import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();
  const onLogin = () => {
    navigate('/', {
      replace: true
    })
    console.log('onlogin');
  }

  return (
    <div className="container mt-5">
      <p>Esto es el login page</p>
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
 
