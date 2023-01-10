import React, { useEffect, useState } from 'react'
import styles from './CookieContainer.module.css'
import Card from '../UI/Card'
import CookieItem from './CookieItem/CookieItem'
import axios from 'axios'


const CookieContainer = () => {
    const [products, setProducts] = useState([])

    const getKookies = () => {
        axios.get('http://localhost:3001/getAllProducts')
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                console.log("get all cookies error", err)
            })
    }

    useEffect(() => {
        getKookies()
    }, [])

    // TODO: Remove console useeffect below when products is verifed
    useEffect(() => {
        console.log('products', products);
    }, [products])


    const cookiesList = products.map(product => (
        <CookieItem
            id={product?.id}
            key={product?.id}
            image={product?.image}
            name={product?.name}
            // description={product?.description}
            price={product?.price}
        />
    ))

    return (
        <section className={styles.kookieContainer}>
            {cookiesList.length !== 0 && <Card>
                {cookiesList}
            </Card>}
        </section>
    )
}

export default CookieContainer