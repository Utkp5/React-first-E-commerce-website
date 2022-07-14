import React,{useState} from "react";
import './Login.css';
import Navbar from "../../components/navbar/navbar";

function Login() {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  const login = () =>
  {
    if(email && password)
    {
      window.location.href = "/products";
    }
    else
    {
      window.location.href = "/Login";
    }
  }
  return (
    <div>
    <Navbar />
      <div className="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <div className="form">
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"
        onChange={(e) =>{
          setemail(e.target.value)
        }}
        />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"
        onChange={(e) =>{
          setpassword(e.target.value)
        }}
        />
        <button className="button" onClick={login}>Log In</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
