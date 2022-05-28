import {useState} from 'react';
import axios from 'axios';

function Login() {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const onSubmit =(e) => {
        e.preventDefault();
        const user = {
            password: password,
            username: username
        }
        axios.post('http://localhost:8000/user/login', user)
        .then(res=>{
            if(res.data.loginSuccess){
                console.log(res);
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
        <div>
            <form className='form'>
                Username: <input required type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                Password: <input required type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </form>
            <button type='submit' className='btn btn-primary' onClick={onSubmit}>submit</button>
        </div>
    )
}

export default Login