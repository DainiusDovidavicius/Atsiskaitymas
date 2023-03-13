import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import "./Contactspage.css";

function Contactspage() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  console.log(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((responsejson) => setUsers(responsejson));
  }, []);

  function handleClick(id) {
    history.push(`/contacts/${id}`);
  }

  return (
    <div>
      <Header />
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h2 className="useris">{user.name}</h2>
            <ul className="contacts">
              <li>
                Website: <a href="website">{user.website}</a>
              </li>
              <li>City: {user.address.city}</li>
              <li>
                Email: <a href="mailto:email">{user.email}</a>
              </li>
              <li>Street: {user.address.street}</li>
              <li>
                Phone: <a href="tel:phone">{user.phone}</a>
              </li>
              <li>Suite: {user.address.suite}</li>
            </ul>
            <Button onclick={() => handleClick(user.id)}>
              More Info About User
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contactspage;
