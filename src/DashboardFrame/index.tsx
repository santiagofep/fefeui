import * as React from "react";
import { useState, useEffect } from "react";

import { Header, HeaderProps } from "../Header";
import { Sidebar, SidebarProps } from "../Sidebar";
import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  VStack,
} from "@chakra-ui/react";

interface DashboardFrameProps {
  header: HeaderProps;
  sidebar: SidebarProps;
  children: React.ReactNode;
}

export const DashboardFrame: React.FC<DashboardFrameProps> = ({
  header,
  sidebar,
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (sidebar.width === undefined) {
    sidebar.width = "250px";
  }
  if (header.height === undefined) {
    header.height = "60px";
  }

  sidebar.height = `calc(100vh - ${header.height})`;

  const sidebarProps = {
    paddingTop: "0.5rem",
    display: ["none", "none", "flex"],
    ...sidebar,
  };
  delete header.hamburger;
  const headerProps = {
    hamburger: {
      display: ["block", "block", "none"],
      onClick: () => setIsSidebarOpen(!isSidebarOpen),
    },
    ...header,
  };

  return (
    <Flex flexWrap={"wrap"}>
      <Header {...headerProps} />
      <Flex width={"100%"}>
        <Sidebar {...sidebarProps} />
        <Box
          width={["100%", "100%", `calc(100% - ${sidebar.width})`]}
          maxH={sidebar.height}
          overflowY={"auto"}
        >
          {children}
        </Box>
      </Flex>
      <Drawer
        isOpen={isSidebarOpen}
        placement={"left"}
        onClose={() => setIsSidebarOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody paddingX={0} paddingY={"0.5rem"}>
            <VStack>
              <Box padding={"0.5rem"}>
                <Image
                  src={header.logo.src}
                  alt={header.logo.alt}
                  height={header.logo.height}
                  width={header.logo.width}
                  fit="contain"
                />
              </Box>
              <Divider />
              <Sidebar width={"100%"} {...sidebar} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};
