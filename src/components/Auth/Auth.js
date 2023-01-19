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
            firstname,
            lastname,
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
                background: `linear-gradient(130deg, rgba(255,255,255,0.2), rgba(0,0,0,0.2)), url('https://img.freepik.com/free-photo/wide-selective-closeup-shot-stack-baked-chocolate-cookies_181624-3987.jpg?w=1800&t=st=1674155526~exp=1674156126~hmac=31a91e689aab4f64685175119666341393acc5b62967354f4971b8949feff5d0') no-repeat center/cover`,
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