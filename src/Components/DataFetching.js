import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const DataFetching = () => {
    const [post,setPost]=useState({})
    const [error,setError]=useState('')
    const [id,setId]=useState(1)
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response=>{
            console.log(response)
            setPost(response.data)
        })
        .catch(error=>{
            console.log(error)
            setError(error)
        })
    },[idFromButtonClick])
    const handleClick=()=>{
        setIdFromButtonClick(id)
    }
    return (
        <div>
            <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
            <button onClick={handleClick}>Fetch Post's title</button>
            <div>{post.title}</div>
            
            {/* List of posts:
            <ol>
                {post.length>0?post.map(post=>(<li key={post.id}>{post.title}</li>)):null}
                {
                    error?'Something went wrong':null
                }
            </ol> */}
        </div>
    )
}
