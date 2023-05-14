import { useEffect, useRef, useState } from "react";

export default function TypeWritter(ArrayText){
  const index = useRef(0);

  const [currentLetter, setCurrentLetter] = useState("");

  const text = ArrayText.text[0].name

  useEffect(() => {
    index.current = 0;
    setCurrentLetter
  },[ArrayText])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentLetter((value) => value + String(text).charAt(index.current));
      index.current += 1;
    }, 100);

    return () => clearTimeout(timeout)
  }, [currentLetter, text]);

  const textSyle = {
    color: ArrayText.text[0].color
  }

  return <span style={textSyle} className="aboutMe">{currentLetter}</span>
}

