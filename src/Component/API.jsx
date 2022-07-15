import axios from 'axios'
import React, { useEffect, useState } from 'react'

const API = () => {
    const [data, setData] = useState([])


    // const getApi = async ()=>{
    //     const res =await fetch("https://jsonplaceholder.typicode.com/todos") 
    //     const data= await res.json()
    //     console.log("Data",data)
    // }

    const getApi = async () => {
        const data = await axios.get("https://dummyjson.com/products").then((res) => {
            console.log("7777", res.data.products)
            setData(res.data.products)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getApi()    
    }, [])
    return (
        <div>
            <div className="container ">
                <div className="row ">
            {
                data.map((val) => {
                    return (
                        <>
                        <div className="col-4 my-4">
                            <div className="card" style={{height:'fit-content'}} >
                                            <img className="card-img-top" style={{height:'50vh'}} src={val.images[0]} alt="Card image" />
                                            <div className="card-body">
                                                <h4 className="card-title">{val.title}</h4>
                                                <p className="card-text">{val.description}</p>
                                                <p>Rating: {val.rating}/5</p>
                                                <p>Discount: {val.discountPercentage}% only</p>
                                                <a href="#" className="btn btn-primary">${val.price}</a>
                                            </div>
                                        </div>
                                </div>
                                </>
                                )
                            })
                        }
        </div>
                        </div>
                        </div>
    )
}

export default API
