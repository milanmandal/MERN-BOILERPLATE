import { useEffect, useState} from 'react';
import Logout from '../logout/Logout';
import auth from '../../middleware/auth'
import Spinner from '../../components/spinner/Spinner';

function Home() {
 
  const [islogged, setIslogged] = useState(false);
  async function checkAuth() {
    const isAuth = await auth();
    setIslogged(isAuth);
  }
  useEffect(() => {
    checkAuth();
  })

  return(
    islogged?
    <div>
      <h1>Welcome</h1>
      <input/>
      <Logout/>
    </div>
    :
    <Spinner/>
  )
  
}

export default Home