import axios from 'axios'
function Logout() {

    const logout = () => {
        const headers = {
            'authorization': localStorage.getItem('token')
        }
        axios.get('http://localhost:8000/user/logout',{headers: headers})
        .then(res=>{
            if(res.data.logoutSuccess){
                localStorage.removeItem('token');
                window.location = '/';
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