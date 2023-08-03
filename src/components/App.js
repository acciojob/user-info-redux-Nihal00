import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>User Information</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div>
        <p>Current values in store:</p>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
};

export default App;
