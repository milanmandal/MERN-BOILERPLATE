import {useState} from 'react'
import axios from 'axios';

function Register() {
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            username: username
        }
        axios.post('http://localhost:8000/user/register', user)
        .then(res=>{
            if(res.data.registerSuccess){
                window.alert(res.data.message);
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
        <div>
            <form className='form'>
                First Name: <input required type="text"  value={firstname} onChange={(e)=>setFname(e.target.value)}></input>
                Last Name: <input required type="text" value={lastname} onChange={(e)=>setLname(e.target.value)}></input>
                Username: <input required type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                Email: <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                Password: <input required type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </form>
            <button type='submit' className='btn btn-primary' onClick={onSubmit}>submit</button>
        </div>
    )
}

export default Register