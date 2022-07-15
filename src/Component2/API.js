import { useEffect, useState } from "react"
import React from 'react'

const API = () => {

    const [users, setUsers] = useState([])

    const getuser = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        setUsers(await response.json());

    }



    useEffect(() => {
        getuser();
    }, [])

    return (
        <>
            
                    <h2 className="text-center">List of Github Users</h2>
                
                <div className="container-fluid">
                    <div className="row text-center">

                        {
                            users.map((elem) => {
                                return(
                                <div className="col-10 col-md-4 mt-5">
                                    <div className="card p-2 d-flex align-item-center">
                                        <div>
                                            <img src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/12/6/w1200X800/MH5-.jpg" alt="" width="155" />
                                        </div>
                                        <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textleft">Name : {elem.name}</h4><span className="textleft">UserName : {elem.username}</span>
                                            <div className="p-2 mt-2 bg-info d-flex justify-content-between rounded text-white">
                                                <div className="d-flex flex-column"><span>Address : {elem.address.street}</span><span>Email : {elem.email}</span></div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            
        </>
    )
}

export default API