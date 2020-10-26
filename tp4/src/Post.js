import React, { Component } from 'react';
import "./Post.css";

class Post extends Component{

    render(){

    const {post} = this.props.user;
    const {content,like} = post;

    return(
        
        <div className="postContainer">
            <strong>Saisir la publication:</strong>
            <p>{content}</p>
            <p>Like: {like}</p>
        </div>  
        )
    }
}

export default Post;