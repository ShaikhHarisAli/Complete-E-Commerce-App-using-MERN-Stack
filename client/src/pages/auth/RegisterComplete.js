import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
  setEmail(window.localStorage.getItem("emailFormRegistration"));
//    console.log(window.localStorage.getItem("emailFormRegistration"))
console.log(window.location.href)
   
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password){
      toast.error("Email and password is Required");
      return;
    }
    if (password.length < 6){
      toast.error("Password must be at least 6 characters");
      return;
    }

    try{
      const result = await auth.signInWithEmailLink(email,window.location.href)
      console.log("Result",result)
      if(result.user.emailVerified){
        // remove email form local storage
        window.localStorage.removeItem("emailFormRegistration")
        // get user id token
        let user = auth.currentUser
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult() 
        // redux store
        console.log("User",user);
        console.log("idTokenResult",idTokenResult);
        // redirect
         history.push("/")

      }
    }
    catch(error){
      console.log(error)
      toast.error(error.message)
    }
  };

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" value={email} disabled />

      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoFocus
      />
      <br />
      <button type="submit" className="btn btn-raised">
        Complete Registration 
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
