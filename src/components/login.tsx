
import { useState } from 'react';
import axios from 'axios';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try{

        const res = await axios({
          method:'POST',
          withCredentials: true,
          url:"http://127.0.0.1:4000/api/v1/users/login", 
          data:{
            email, password
          }  
        })
        if(res.data.status === 'success'){
            alert("Logged In successfully");
            location.assign('/home')
        }
    }catch(e) {
        console.log(e);
    }

}

  return (
      <div className="login">
        <form action="/login" method="post" onSubmit={login}>
          <label htmlFor='chk' aria-hidden="true">Login</label>
          <input type="email" name="email" placeholder="Email" value={email} 
            onChange={ e => setEmail(e.target.value)}
          />
          <input type="password" name="password" placeholder="Password" value={password} 
            onChange={ e => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>

  );
}
