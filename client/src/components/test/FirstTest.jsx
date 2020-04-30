import React from 'react'

import useFetch from '../../effects/use-fetch.effect'

const FirstTest = ({ userId }) => {

    const post = useFetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    return (
        <div className="card">
            {
                post && post ? (
                    <div>
                        <h3> { post.title }</h3>
                        <p> { post.body }</p>
                    </div>
                ) : (
                    <p>No post Found</p>
                )
            }
        </div>
    )
}

export default FirstTest
