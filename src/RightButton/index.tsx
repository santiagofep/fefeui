import * as React from "react";
import { useState, useEffect } from "react";

import { ButtonProps } from "../types";
import { Box, Button } from "@chakra-ui/react";

interface RightButtonProps extends ButtonProps {}

export const RightButton: React.FC<RightButtonProps> = (props) => {
  return (
    <Box textAlign={"right"}>
      <Button {...props} />
    </Box>
  );
};
