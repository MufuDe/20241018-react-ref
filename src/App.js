import { useState, useRef } from "react";

export default function Chat() {
  const [text, setText] = useState("");

  function handleSend() {
    setTimeout(() => {
      alert("正在发送：" + text);
    }, 3000);
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSend}>发送</button>
    </>
  );
}
