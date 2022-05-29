import { useEffect, useState} from 'react';
import Logout from '../logout/Logout';
import auth from '../../middleware/auth'
import Spinner from '../../components/spinner/Spinner';

function Home() {
 
  const [islogged, setIslogged] = useState(false);
  
  let user = null;
  const authenticate = async()=>{
    user = await auth();
    console.log(user)
    if(user.isAuth){
      setIslogged(true);
    }
  }

  useEffect(() => {
    authenticate();
  })

  return(
    islogged?
    <div>
      <h1>Welcome</h1>
      <Logout/>
    </div>
    :
    <Spinner/>
  )
  
}

export default Home