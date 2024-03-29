import {
  Box,
  BoxProps,
  Center,
  Container,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect } from "react";

export interface CenteredFullPageProps extends BoxProps {
  children: React.ReactNode;
  variant?: string;
}

export const CenteredFullPage: React.FC<CenteredFullPageProps> = ({
  children,
  variant,
  ...rest
}) => {
  const styles = useMultiStyleConfig("CenteredFullPage", { variant });

  console.log(styles);

  return (
    <Box __css={styles.wrapper} {...rest}>
      <Center sx={styles.center}>
        <Container sx={styles.inner}>{children}</Container>
      </Center>
    </Box>
  );
};
