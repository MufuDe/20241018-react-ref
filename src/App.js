import { useRef } from "react";

export default function Counter() {
  let countRef = useRef(0);

  function handleClick() {
    // 这样并未重新渲染组件！
    countRef.current = countRef.current + 1;
  }

  return <button onClick={handleClick}>你点击了 {countRef.current} 次</button>;
}
