import axios from 'axios'
import React, { useEffect, useState } from 'react'



const ApiCocktail = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState('')


    const getApi = async () => {
        const data = await axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
            console.log("Hello", res.data)
            setData(res.data)
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
                <div className="row"><div className="col-12">Hello Search Below.....</div></div>    
                <div className="row ">
                    <div className="col-8" > <input type="text" placeholder='Search Here' style={{ width: '100%' }} onChange={(e) => { setText(e.target.value) }} /></div>
                    
                    <div className="col-4"><button>Search</button></div>

                    {
                        data.filter((val) => {
                            if (text === "") {
                                return val
                            } else if (val.title.toLowerCase().includes(text.toLocaleLowerCase())) {
                                return val
                            }

                        }).splice(0,10).map((val) => {
                            return (
                                <>


                                    <h1>{val.title}</h1>
                                    <p>{val.completed}</p>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


export default ApiCocktail