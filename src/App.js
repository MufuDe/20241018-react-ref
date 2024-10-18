import { useRef } from "react";

export default function Toggle() {
  const isOnRef = useRef(false);

  return (
    <button
      onClick={() => {
        isOnRef.current = !isOnRef.current;
      }}
    >
      {isOnRef.current ? "开" : "关"}
    </button>
  );
}
