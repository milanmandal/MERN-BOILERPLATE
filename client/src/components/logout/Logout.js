import axios from 'axios'
function Logout() {

    const logout = () => {
        axios.get('http://localhost:8000/user/logout')
        .then(res=>{
            if(res.data.logoutSuccess){
                window.location = '/login';
            }
            else{
                window.alert(res.data.message);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
  return (
    <button className='btn btn-danger' onClick={logout}>Logout</button>
  )
}

export default Logout