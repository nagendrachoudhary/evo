import { useContext,useState } from "react";
import { json, Link } from "react-router-dom";
import AuthContextProvider from "../Context/AuthContext";

function Login() {
  let data=useContext(AuthContextProvider)
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
  function Signin() {
    event.preventDefault();
    const handleSubmit = async e => {
      e.preventDefault();
      const response = await loginUser({
        username,
        password
      });
      if ('accessToken' in response) {
        console.log(response.accessToken);
        data.token=response.accessToken;
        data.login=true;
      } else {
        swal("Failed", response.message, "error");
      }
    }
  }

  
  return (
    <div className="login-page">
      <form className="form" data-testid="login-form">
        <div>
          <label>
            <input id="username"data-testid="email-input" type="email"placeholder="email" onChange={()=>{
              setUserName(document.getElementById("username").value);
            }} />
          </label>
        </div>
        <div>
          <label>
            <input
            id="password"
              input="password"
              data-testid="password-input"
              type="password"
              placeholder="password"
            
              onChange={()=>{
                setPassword(document.getElementById("password").value);
              }}/>
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" onClick={Signin} >
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
