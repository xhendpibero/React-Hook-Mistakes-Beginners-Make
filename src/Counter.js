import { useState } from "react";

export function Counter() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  // const [fullname, setFullName] = useState('');

  const fullname = `${firstname} ${lastname}`

  // useEffect(() => {
  //   setFullName(`${firstname} ${lastname}`);
  // }, [firstname, lastname])

  return (
    <>
      <input value={firstname} onChange={e => setFirstName(e.target.value)}></input>
      <br/>
      <input value={lastname} onChange={e => setLastName(e.target.value)}></input>
      <br/>
      {fullname}
    </>
  );
}
