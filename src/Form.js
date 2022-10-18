import { useEffect, useMemo, useState } from "react";

export function Form() {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState("");

  const person = useMemo(() => {
    return { age, name };
  }, [age, name]);

  useEffect(() => {
    console.log(person);
  }, [person]);

  return (
    <div style={{ background: darkMode ? "#333" : "#fff" }}>
      Age: <br />
      <input
        value={age}
        type="number"
        onChange={(e) => setAge(e.target.value)}
      /> <br />
      Name: <br />
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      /> <br />
      Dark Mode: 
      <input
        value={darkMode}
        type="checkbox"
        onChange={(e) => setDarkMode(e.target.checked)}
      />
    </div>
  );
}
