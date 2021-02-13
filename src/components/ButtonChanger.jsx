import React, {useState,useEffect, useCallback} from 'react'

const ButtonChanger = () => {
  const arrayName = ["Tom", "Alice", "Matt", "Chris"];

  const [name, setName] = useState();

  const nameChange = useCallback(() => {
    const rand = Math.floor(Math.random() * arrayName.length);
    setName(arrayName[rand]);
  }, [setName]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setName("");
      nameChange();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [nameChange]);
  return (
    <div>
      {nameChange}
    </div>
  )
}

export default ButtonChanger
