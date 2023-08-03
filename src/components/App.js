import React, { useState } from "react";
import "./../styles/App.css";
import {useDispatch, useSeletor} from "react-redux"

const App = () => {
  
  const dispatch = useDispatch();
  const uname = useSeletor(state => state.name);
  const uemail = useSeletor(state => state.email);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>User Information</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={(e) => dispatch(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={(e) => dispatch(e.target.value)}/>
      </div>

      <div>
        <p>Current values in store:</p>
        <p>Name - {uname}</p>
        <p>Email - {uemail}</p>
      </div>
    </div>
  );
};

export default App;
