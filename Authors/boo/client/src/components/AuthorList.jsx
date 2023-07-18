import React from 'react'
import { Link } from 'react-router-dom'
import Delete from './Delete'

const AuthorList = (props) => {
    const {authors, removeFromDom} = props;
    return (
        <div>
            {authors.map((author, index) => {
                return (
                    <p key={index}>
                        <Link to={"http://localhost:3000/authors/" + author._id}>
                            {author.name}
                        </Link>
                        |
                        <Link to={"http://localhost:3000/authors/" + author._id + "/edit"}>
                            Edit
                        </Link>
                        |
                        <Delete successCallback={() => removeFromDom(author._id)}/>
                    </p>
                )
            })}
        </div>
    )
}

export default AuthorList