import * as React from "react";
import { useState, useEffect } from "react";

import { Heading, VStack, Text } from "@chakra-ui/react";

export interface SettingsGroupProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  borderTop?: boolean;
  borderBottom?: boolean;
  id?: string;
}

export const SettingsGroup: React.FC<SettingsGroupProps> = ({
  title,
  description,
  children,
  borderTop = true,
  borderBottom = false,
  id,
}) => {
  let settingsGroupId = id ? id + "__" : "";
  settingsGroupId = settingsGroupId + title.toLowerCase().replace(/ /g, "-");

  return (
    <VStack
      align={"stretch"}
      borderTop={borderTop ? "1px solid" : ""}
      borderBottom={borderBottom ? "1px solid" : ""}
      borderColor={"gray.300"}
      paddingY={3}
      spacing={1}
      id={settingsGroupId}
    >
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
      {children}
    </VStack>
  );
};
