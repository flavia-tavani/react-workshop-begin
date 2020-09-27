import React, {Fragment, useEffect, useState} from 'react';
import Axios from "axios";
import {User, Post} from "../interfaces/User"

interface ListItemProps {
    data: User
}


export const ListItem: React.FC<ListItemProps> = (props) => {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        Axios.get<Post[]>('https://jsonplaceholder.typicode.com/users/'+props.data.id+'/posts')
            .then(res => setPosts(res.data))
    }, [])

    return <li className="list-group-item" key={props.data.id}>
        {props.data.name} - {posts != null ? posts.length + ' posts' : 'nessun post'}
        <ul>{
            posts.map((post) => {
                return <li className="list-group-item" key={post.id}>{post.body}</li>
            })}
        </ul>
    </li>
}