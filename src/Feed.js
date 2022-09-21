import React from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import { useState } from "react";
import { useEffect } from "react";
import db from "./firebase";
import FlipMove from "react-flip-move";
function Feed() {
  const [posts, setPosts] = useState([]);
//fetch data from firebase
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <FlipMove>
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))} 
      </FlipMove>
      
    </div>
  );
}

export default Feed;
