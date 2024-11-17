import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [userdata, setUserdata] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/PiyushGhavghave')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         console.log("jdfjdfhnkjf");
    //         setUserdata(data)
    //     })
    // },[])

    const userdata = useLoaderData()

    return (
        <>
            <div className='bg-gray-300 p-4 text-center text-2xl'>
                <h2 className='p-4'>My Repositoy Count :{userdata.public_repos} </h2>
                <a href='https://github.com/PiyushGhavghave' className='hover:underline text-gray-700'>Visit Profile</a>
            </div>
        </>
    )
}

export default Github


export const githubDataLoader = async () => {
    const response = await fetch('https://api.github.com/users/PiyushGhavghave')
    const data = await response.json();
    return data;
}
