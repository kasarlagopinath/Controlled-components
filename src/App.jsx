import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div>
      <h2>Controlled Component</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <br /><br />

        <label>Email:</label>
        <br />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h3>Entered Details</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default App;