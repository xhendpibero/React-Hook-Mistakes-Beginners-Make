import { useRef } from "react";

function App() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="App">
      Form Login
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <br />
        <input ref={emailRef} type="email"></input>
        <br />
        <label>Password</label>
        <br />
        <input ref={passwordRef} type="password"></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
