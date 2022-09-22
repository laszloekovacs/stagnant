import React from "react";
import { useEffect, useState } from "react";


export default function Post() {

    const [isLoading, setLoading] = useState(true)
    const [post, setPost] = useState(null)

    useEffect(() => {

        const getData = async () => {
            const res = await fetch('/api/post/2')
            const data = await res.json()

            return data;
        }

        getData().then(entry => {
            setLoading(false)
            setPost(entry)
            console.log(entry)
        })
    }, [])


    if (isLoading) {
        return <p>Loading posts</p>
    } else {
        return (<>
            <p>{post.title}</p>
            <p>{post.content}</p>
            <p>{post.posttime}</p>
        </>)
    }
}