import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const useDebounce = (text: string, time?: number) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setValue(text);
    }, time);

    return () => {
      clearTimeout(timerId);
    };
  });
  return value;
};

const useThrottle = (text: string, time: number) => {
  const [value, setValue] = useState<string>("");
  const latestUpd = useRef(Date.now());

  useEffect(() => {
    const timerId = setTimeout(() => {
      const newDate = Date.now();

      if (newDate - latestUpd.current >= time) {
        setValue(text);
        latestUpd.current = newDate;
      }
    }, time - (Date.now() - latestUpd.current));

    return () => {
      clearTimeout(timerId);
    };
  });

  return value;
};

// (096)457-64-59
const TestComp = () => {
  const [value, setValue] = useState<string>("");

  const onInputChange = (str: string) => {
    const cleanedStr = str.replace(/\D/g, "");
    const maxLength = 10;

    if (cleanedStr.length > maxLength) return;

    let formattedValue = cleanedStr;

    if (cleanedStr.length >= 1) {
      formattedValue = `(${cleanedStr.slice(0, 3)}`;
    }
    if (cleanedStr.length >= 4) {
      formattedValue = `(${cleanedStr.slice(0, 3)})${cleanedStr.slice(3, 6)}`;
    }
    if (cleanedStr.length >= 7) {
      formattedValue += `-${cleanedStr.slice(6, 8)}`;
    }
    if (cleanedStr.length >= 9) {
      formattedValue += `-${cleanedStr.slice(8, 10)}`;
    }

    setValue(formattedValue);
  };

  const text = useDebounce(value, 1000);
  const trText = useThrottle(value, 1000);

  return (
    <div>
      <StInput
        value={value}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
      />

      <p style={{ color: "ffffff" }}>Debounced text: {text}</p>
      <p style={{ color: "ffffff" }}>Throttled text: {trText}</p>
    </div>
  );
};

const StInput = styled.input`
  background-color: white;
`;
export default TestComp;
