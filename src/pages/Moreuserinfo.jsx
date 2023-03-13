import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Moreuserinfo() {
  const params = useParams();

  const [user, setUser] = useState([]);
  console.log(user);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((responsejson) => setUser(responsejson));
  }, [params.id]);
  console.log(params.id);

  return (
    <>
      {user ? (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <ul className="contacts">
            <li>
              Website: <a href="website">{user.website}</a>
            </li>
            <li>City: {user.username}</li>
            <li>
              Email: <a href="mailto:email">{user.email}</a>
            </li>
            <li>Street: {user.id}</li>
            <li>
              Phone: <a href="tel:phone">{user.phone}</a>
            </li>
          </ul>
          <Link to="/contacts">Back to users</Link>
        </div>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
}

export default Moreuserinfo;
