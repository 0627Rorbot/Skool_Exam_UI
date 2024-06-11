import React from "react";
import { Spinner, AbsoluteCenter, Box } from "@chakra-ui/react";
// import "./style.css"

const TSpinner = () => {
  return (
    <Box
      position={"fixed z-50"}
      top={0}
      left={0}
      right={0}
      bottom={0}
      background={"rgba(100, 100, 100, 0.8)"}
      display={"flex"}
      justify-content={"center"}
      align-items={"center"}
    >
      <AbsoluteCenter p="4" color="white" axis="both">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </AbsoluteCenter>
    </Box>
  );
};

export default TSpinner;
