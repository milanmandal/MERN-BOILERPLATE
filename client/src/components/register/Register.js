import {useState} from 'react'

function Register() {
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(firstname, lastname, email, password, username);
        setFname('');
        setLname('');
        setEmail('');
        setPassword('');
        setUsername('');
    }

    return (
        <div>
            <form>
                First Name: <input required type="text"  value={firstname} onChange={(e)=>setFname(e.target.value)}></input>
                Last Name: <input required type="text" value={lastname} onChange={(e)=>setLname(e.target.value)}></input>
                Username: <input required type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
                Email: <input required type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                Password: <input required type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </form>
            <button type='submit' onClick={onSubmit}>submit</button>
        </div>
    )
}

export default Register