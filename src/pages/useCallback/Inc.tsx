import React from "react";
const inc = ({ incriment }: { incriment: () => void }) => {
  return (
      <>
      {console.log("inc render")}
      <div>inc</div>
      <button onClick={incriment}>Inc number</button>
    </>
  );
};

export default React.memo(inc);
