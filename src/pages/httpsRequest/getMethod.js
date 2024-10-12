import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GetMethod = () => {
    const [post, setPost] = useState([])
    const [load, setLoad] = useState(false)
    const fetchPost = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setPost(response?.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }
    useEffect(() => {
        fetchPost()
    }, [load])

    console.log("All Post ", post)
    return (
        <div>
            <div className="page_width">
                <br />
                <h2>Get Posts</h2>
                <button onClick={() => setLoad(!load)} >Load More Data</button>
                <div className="all_post_items">
                    {post?.slice(0, 20)?.map((item, index) => {
                        return (
                            <div className="post_items" key={index} >
                                <p>id: {item?.id} </p>
                                <h2>Title: {item?.title} </h2>
                                <p>Details: {item?.body}  </p>
                            </div>
                        )
                    })}

                </div>
            </div>
            GetMethod</div>
    )
}

export default GetMethod