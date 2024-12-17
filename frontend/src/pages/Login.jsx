import React ,{ useState } from 'react';
import Login from '../components/Login/Login'

export default function LoginActivity() {
  
  const [user, setUser] = useState(null); // User state

  return (
    <div>
      <Login setUser={setUser}/>
    </div>
  )
}
