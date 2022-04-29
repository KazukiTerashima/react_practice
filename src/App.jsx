import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
  const [num, setNum] = useState(0)
  useEffect(() => {
    console.log("test");
  }, []);

  const onClickButton = () => {
    setNum(prev => prev + 1);
  }
  
  return (
    <>
      <h1 style={{ color: "red" }}>Hello World!</h1>
      <ColoredMessage color="blue">how are you?</ColoredMessage>
      <ColoredMessage color="pink">good!</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  )
}
