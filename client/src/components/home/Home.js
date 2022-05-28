import axios from 'axios';
import { useEffect } from 'react';
import Logout from '../logout/Logout';

function Home() {

  useEffect(() => {
    axios.get('http://localhost:8000/user/auth')
    .then(res => {
      console.log(res.data);
      if(!res.isAuth){
        // window.location='/login';
        return (
          <div>loading</div>
        )
      }
    })
    .catch(err => {
      window.alert(err);
    })
  })

  return(
    <div>
      <h1>Welcome</h1>
      <Logout/>
    </div>
  )
  
}

export default Home