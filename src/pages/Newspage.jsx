import React, { useState, useEffect } from "react";
import Header from "../components/Header";

function Newspage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Header />

      <div>
        <h1>Posts</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2> <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newspage;
