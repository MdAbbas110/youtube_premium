import React, { useEffect, useMemo, useRef, useState } from "react";
import { findNthPrime } from "../utils/helper";
import { MoonIcon } from "lucide-react";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setDarkTheme] = useState(false);

  console.log("Rendering");
  const prime = useMemo(() => findNthPrime(text), [text]);
  let refInput = useRef(null);

  const refTimer = useRef(null);
  useEffect(() => {
    // refTimer.current = setInterval(() => {
    //   console.log("Namaste ref", Math.random());
    // }, 1000);
    // return () => clearInterval(refTimer.current);
    // refInput.current.focus();
  }, []);

  return (
    <div
      className={
        "m-4 p-2 size-96 border border-black" +
        (isDarkTheme && " text-white  bg-gray-900")
      }
    >
      <button onClick={() => setDarkTheme(!isDarkTheme)}>switch</button>
      <div>
        <input
          ref={refInput}
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-black w-72 px-2"
        />
      </div>
      <div>
        <h1>{prime}</h1>
        <CallBack todo={text} />
      </div>
    </div>
  );
};

const CallBack = React.memo(({ todo }) => {
  console.log("callback renders");
  return (
    <div>
      hello
      <p>{todo}</p>
    </div>
  );
});

export default Demo;
