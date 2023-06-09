import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../../api/ConfigFirebase";
import logo from "../../img/logo.png";
import { useNavigate } from "react-router-dom";
import "../../style/Login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        const isAdmin = user.email === "sergio@gmail.com";

        if (isAdmin) {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      })
      .catch((error) => {
        setErrorMessage("Incorrect e-mail or password");
      });
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="img-salesianos" />
      <form className="login-form" onSubmit={handleLogin}>
        <label className="login-label" htmlFor="email">Email:</label>
        <input
        className="login-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="login-label" htmlFor="password">Password:</label>
        <input
        className="login-input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-buton" type="submit">
          Login
        </button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Login;
