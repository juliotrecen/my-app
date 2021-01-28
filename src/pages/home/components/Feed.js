import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


import PostCard from '../../../components/PostCard'; 

const useStyles = makeStyles(() => ({
    root: {
    
    }
}));

const posts = [
    {   
        id: 1,
        author: {
            id: 1,
            username: 'juliocentanin',
            name: "Júlio Centanin",
            avatar: '/images/avatar/avatar_1.jpeg'
        },
        title: "Criando um App do zero usando React.Js",
        date: "January 28 2021",
        description: "Fala pessoal, tudo bom ?",
        hashtags: "#donate, #javascript, #reactjs, #develop",
        image: "/images/posts/post1.png"
    },

        {   
            id: 2,
            author: {
                id: 1,
                username: 'danielcentanin',
                name: "Daniel Centanin",
                avatar: '/images/avatar/avatar_1.jpeg'
            },
            title: "Comparatips React.js",
            date: "January 27 2021",
            description: "Fala pessoal, como vai?",
            hashtags: "#framework, #javascript, #reactjs, #vue",
            image: "/images/posts/post2.png"
    
                
            },
];

function Feed() {
    
    const classes = useStyles();

    return(
        <div className = {classes.root}>
            {
            posts.map((post) => (
                <PostCard key= {post.id} post ={post}/>
            ))
            }
        </div>
    )
    
}

export default Feed;
