import { useState, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../../store/auth-context'
import styles from './Auth.module.css'
import Card from '../UI/Card'

const Auth = () => {
    const authCtx = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [register, setRegister] = useState(true)
    const [message, setMessage] = useState('')
    const [display, setDisplay] = useState('none')

    const submitHandler = e => {
        e.preventDefault()
        setDisplay('none')

        const body = {

            email,
            password
        }

        axios.post(!register ? "/register" : "/login", body)
            .then((res) => {
                console.log('data', res.data)
                authCtx.login(res.data.token, res.data.exp, res.data.userId)
            })
            .catch(err => {
                console.log('error', err)
                setMessage(err.response.data)
                setDisplay('block')
                setEmail('')
                setPassword('')
            })

    }

    return (
        <main>
            <div className='banner' style={{
                width: '100vw',
                height: '82vh',
                background: `linear-gradient(190deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://img.freepik.com/free-photo/wide-selective-closeup-shot-stack-baked-chocolate-cookies_181624-3987.jpg?w=2000&t=st=1673483204~exp=1673483804~hmac=43298e2e24e9c1475615c2e924a293eae0d0c3f66edb69d6e98e0ed6fc5dd453') no-repeat center/cover`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Card>
                    <div className={styles.authHeader}>
                        {!register ? <h2>Sign Up</h2> : <h2>Login</h2>}
                    </div>
                    <form className={styles.auth} onSubmit={submitHandler}>
                        {!register && <input
                            className={styles.input}
                            type='text'
                            placeholder='first name'
                            onChange={e => setFirstName(e.target.value)}
                            value={firstname}
                        />}
                        {!register && <input
                            className={styles.input}
                            type='text'
                            placeholder='last name'
                            onChange={e => setLastName(e.target.value)}
                            value={lastname}
                        />}
                        <input
                            className={styles.input}
                            type='text'
                            placeholder='email'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input
                            className={styles.input}
                            type='password'
                            placeholder='password'
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                        <button className={styles.authBtn}>
                            {!register ? 'Sign Up' : 'Login'}
                        </button>
                <p style={{ display: display }} className={styles.msg}>{message}</p>
                    </form>
                </Card>
                <button className={styles.orBtn} onClick={() => setRegister(!register)}>Need to {!register ? 'Login' : 'Sign Up'}?</button>
            </div>
        </main>
    )
}

export default Auth