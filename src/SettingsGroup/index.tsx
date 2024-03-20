import * as React from "react";
import { useState, useEffect } from "react";

import { Heading, VStack, Text } from "@chakra-ui/react";

export interface SettingsGroupProps {
  title: string;
  description?: string;
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
      borderColor={"gray.200"}
      paddingY={5}
      spacing={1}
      id={settingsGroupId}
    >
      <Heading size="md">{title}</Heading>
      {description && <Text>{description}</Text>}
      <VStack align={"stretch"} paddingY={4} spacing={5}>
        {children}
      </VStack>
    </VStack>
  );
};
