import React, { useState, useEffect, useContext } from 'react'
import styles from './Profile.module.css'
import axios from 'axios'
import AuthContext from '../../store/auth-context'
import User from './User'
import Card from '../UI/Card'

const Profile = () => {
  const { userId } = useContext(AuthContext)
  const [user, setUser] = useState([])


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


  const profileDisplay = user.map((user) => {
    return <User details={user} />
  })

  return (
    <div>
      <div className='banner' style={{
        width: '100vw',
        // height: '82vh',
        background: `url('https://static.vecteezy.com/system/resources/previews/012/221/444/large_2x/cookie-crumbs-on-white-background-free-photo.JPG') no-repeat center/cover`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div className={styles.profile}>
          {user.length === 0 ? <h3 className={styles.order}>No Orders Found</h3> : <Card>
            <div>
              <h3 className={styles.order}>Order Details</h3>
            </div>
            <div className={styles.details}>{profileDisplay}</div>
          </Card>}
        </div>
      </div>
      </div>
      )
}

      export default Profile