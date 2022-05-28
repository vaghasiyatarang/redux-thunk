import React from "react";

const dec = ({ decriment }: { decriment: () => void }) => {
  return (
    <>
    {console.log("dec render")}
      <div>dec</div>
      <button onClick={decriment}>Dec number</button>
    </>
  );
};

export default React.memo(dec);
