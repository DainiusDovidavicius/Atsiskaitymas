import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import "./Newspage.css";

function Newspage() {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((responsejson) => setPosts(responsejson));
  }, []);

  function handleClick(id) {
    history.push(`/onepost/${id}`);
  }

  return (
    <div>
      {/* maxx-width: 1200px, margin: 50px auto, */}
      <Header />
      <h1 className="News1">News News News</h1>
      <div className="news">
        {/* className"grid" css display: grid, grid-template-columns: 1fr ąfr ąfr ąfr */}
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Button onclick={() => handleClick(post.id)}>
              More Information About Post
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newspage;
