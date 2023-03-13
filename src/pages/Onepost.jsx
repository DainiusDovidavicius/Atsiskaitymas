import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Onepost() {
  const params = useParams();

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((responsejson) => setPost(responsejson));
  }, [params.id]);

  console.log(post);

  return (
    <div>
      <p>Post User Id {post.userId}</p>
      <p>Post Id {post.id}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <Link to="/news">Back to Newspage</Link>
    </div>
  );
}

export default Onepost;
