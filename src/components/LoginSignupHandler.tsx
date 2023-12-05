'use client';
import Login from "./login";
import SignUp from "./signup";

export default function LoginSignupHandler() {

  return (
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <SignUp/>
      <Login/>
      
    </div>
  );
}
