import React from 'react'
import { useParams } from 'react-router-dom'

function Param() {
    const { id } = useParams();
    return (
        <h1 className='bg-gray-300 p-4 flex justify-center text-2xl'> User Name : {id} </h1>
    )
}

export default Param
