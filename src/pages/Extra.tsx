import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Extra = ({demo}:{demo:()=>void}) => {
  return (
    <>
      {console.log("Extra com render")}
      <Stack mr="15ch" ml="15ch" mt="2ch" sx={{ textAlign: "center"}}>
        <Button variant="outlined" onClick={demo}>
          Done
        </Button>
      </Stack>
    </>
  );
};

export default React.memo(Extra);
