import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { USERS, currentUser } from "./Signup";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    if (email in USERS && password === USERS[email].password) {
      currentUser[0] = { email: email, username: USERS[email].username, password: password, userId: USERS[email].userId };
      navigate("/");
    }
    else {
      alert("Invalid email or password.");
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-4 text-center">
        <form onSubmit={e => handleSignin(e)}>
          <h2 className="text-center mt-4">Sign in</h2>
          <br />
          <input className="form-control" type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} required />
          <br />
          <input className="form-control" type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} required />
          <br />
          <button className="btn btn-primary mb-3" type="submit">Sign in</button>
          <br />
          <Link to="/signup">Sign up</Link>
        </form>
      </div>
    </div>
  );
}

export { Signin };
