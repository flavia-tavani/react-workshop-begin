import React, {Fragment, useEffect, useState} from 'react';
import {ListItem} from './ListItem'

interface User {
    id: number;
    name: string;
    userPosts: Post[]
}

interface ListProps {
    data: User[]
}

interface Post {
    id: number,
    title: string,
    body: string
}


export const List : React.FC<ListProps> = (props) => {
    return(
        <div>{
            props.data.map((user) => {
                return <ListItem data={user} key={user.id} />
            })}
        </div>
    )
}

