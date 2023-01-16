import React, {useState, useEffect, useContext} from 'react'
import styles from './Profile.module.css'
// import { useParams } from 'react-router-dom'
import axios from 'axios'
import AuthContext from '../../store/auth-context'
import User from './User'

const Profile = () => {
  const {userId} = useContext(AuthContext)
  const [user, setUser] = useState([])
  // const { id } = useParams()


  useEffect(() => {
      axios.get(`/user/${userId}`)
      .then((res) => {
          setUser(res.data)
      })
      .catch(err => {
          console.log('error getting user', err)
      })
}, [userId])

  useEffect(() => {
      console.log('user', user);
  }, [user])

  const mappedUser = user.map(user => {
    return <User
      id={user?.id}
      key={user?.id}
      firstname={user?.firstname}
    />
})

  return (
    <div className={styles.profile}>
      <div className={styles.kookie}>{userId}</div>
      <div className={styles.kookie}>Welcome {user.length !== 0 && user[0].firstname}</div>
      <div className={styles.kookie}>{mappedUser}</div>
    </div>
  )
}

export default Profile