import {
  Box,
  BoxProps,
  Center,
  Container,
  ContainerProps,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect } from "react";

export interface CenteredFullPageProps extends BoxProps {
  children: React.ReactNode;
  variant?: string;
  contentMaxWidth?: ContainerProps["maxW"];
}

export const CenteredFullPage: React.FC<CenteredFullPageProps> = ({
  children,
  variant,
  contentMaxWidth = "container.lg",
  ...rest
}) => {
  const styles = useMultiStyleConfig("CenteredFullPage", { variant });

  return (
    <Box __css={styles.wrapper} {...rest}>
      <Center sx={styles.center}>
        <Container sx={styles.inner} maxW={contentMaxWidth}>
          {children}
        </Container>
      </Center>
    </Box>
  );
};
