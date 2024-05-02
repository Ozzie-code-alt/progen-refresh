"use client"

import { useEffect, useState } from "react";

const TypeWriterEffect = ({
  content
}) => {
  const [words, setWords] = useState([]);

  const typewrite = (text, delay) => {
    let index = 0;
    let typed = '';

    const typeNextCharacter = () => {
      const splitWords = text.split(" ");
      
      if (index < splitWords.length) {
        if (index === 0) {
          typed += splitWords[index];
        }else {
          typed += " " + splitWords[index]
        }

        index++;
        setTimeout(typeNextCharacter, delay);
        setWords(typed);
      }
    };

    setTimeout(typeNextCharacter, 0);
  };
  
  useEffect(() =>{
  typewrite(content, 10);
  }, [])
  
  return ( 
    <p>
      {words}
    </p>
   );
}
 
export default TypeWriterEffect;