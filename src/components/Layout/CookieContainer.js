import React, { useEffect, useState } from 'react'
import styles from './CookieContainer.module.css'
import Card from '../UI/Card'
import CookieItem from './CookieItem/CookieItem'
import axios from 'axios'


const CookieContainer = () => {
    const [products, setProducts] = useState([])
    // const url = "http://localhost:3000/"

    const getCookies = () => {
        axios.get("http://localhost:3000/getAllProducts")
        .then((res) => {
            console.log(res.data)
            setProducts(res.data)
        })
        .catch((err) => {
          console.log("get all cookies error", err)
        })
      }

      useEffect(() => {
       getCookies()
      }, [])

      console.log('products', products)


      const cookiesList = products.map(product => (
          <CookieItem
          id={product.id}
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
          />
          ))

          return (
              <section className={styles.meals}>
            <Card>
                {cookiesList}
            </Card>
        </section>
    )
}

export default CookieContainer