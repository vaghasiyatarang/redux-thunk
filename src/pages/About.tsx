import React, { useCallback, useState,useMemo} from "react";
import Inc from "./useCallback/Inc";
import Dec from "./useCallback/Dec";
const About = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);

  const incriment = useCallback(() => {
    setCount(count + 1);
  },[count]);

  const decriment = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  const memo = useMemo(() => {
    console.log("memo function");
    
    return count+10
  },[count])

  
  return (
    <>
      <h1 style={{ textAlign: "center" }}>About</h1>
      <br />
      <br />
      <h3>Memo value : {memo}</h3>
      <h3>Count : {count}</h3>
      <h3>Num : {num}</h3>
      <Inc incriment={incriment} />
      <Dec decriment={decriment} />
      <h3>Hello this is test</h3>
    </>
  );
};

export default About;
