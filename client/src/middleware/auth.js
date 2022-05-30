import axios from "axios";

async function auth (){

  const token = localStorage.getItem('token');
  const headers = {
    "authorization": token?token:null
  }
  
  let user = null

  const promise= await axios.get('http://localhost:8000/user/auth',{headers: headers})
  try{
    user = await Promise.resolve(promise.data)
    if(!user.isAuth){
      localStorage.removeItem('token');
      window.location = '/login';
    }
  }catch(err)
  {
    return err
  }
  
  return user.isAuth;
}
export default auth
