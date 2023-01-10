import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './DetailScreen.module.css'
import Card from '../UI/Card'
import CookieItem from '../Layout/CookieItem/CookieItem'

const DetailScreen = () => {
    const [kookie, setKookie] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3001/kookie/${id}`)
            .then((res) => {
                setKookie(res.data)
            })
            .catch(err => {
                console.log('error getting kookie', err)
            })
    }, [id])

    useEffect(() => {
        console.log('kookie', kookie);
    }, [kookie])



    const mappedKookie = kookie.map(kookie => {
        return <CookieItem
          id={kookie.id}
          key={kookie.id}
          image={kookie.image}
          name={kookie.name}
          description={kookie.description}
          price={kookie.price}
        />
    })

    return (
        <div className={styles.detail}>
            <Card>
                <div className={styles.kookie}>{mappedKookie}</div>
                <div className={styles.description}>{kookie.description}</div>
            </Card>
            
        </div>
    )
}

export default DetailScreen
