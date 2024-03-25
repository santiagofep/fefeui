import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { MdCheck } from "react-icons/md";

interface PriceTableProps {
  selectButtonText?: string;
  selectedButtonText?: string;
  recomendedText?: string;
  recomendedGradient?: string;
  data: {
    title: string;
    price: number;
    paymentFrequency?: string;
    features: string[];
    isActive: boolean;
    onClick: () => void;
    isRecomented?: boolean;
    isLoading?: boolean;
  }[];
}

export const PriceTable: React.FC<PriceTableProps> = ({
  data,
  selectButtonText = "Activate",
  selectedButtonText = "Current plan",
  recomendedText = "Recomended",
  recomendedGradient = "linear(to-br, purple.800, blue.300, purple.300)",
}) => {
  return (
    <HStack align={"stretch"}>
      {data.map((item, index) => {
        return (
          <Box
            key={index}
            padding={"2px"}
            bgGradient={
              item.isRecomented
                ? recomendedGradient
                : "linear(to-r, white, white)"
            }
            borderRadius={"md"}
            shadow={"md"}
            maxW={"400px"}
            width={"100%"}
            overflow={"hidden"}
          >
            <VStack
              position={"relative"}
              justifyContent={"start"}
              align={"stretch"}
              padding={"1rem"}
              background={"#fff"}
              borderRadius={"md"}
            >
              <Heading size="lg">{item.title}</Heading>
              <Box lineHeight={"2rem"}>
                <Text fontSize="4xl">${item.price}</Text>
                {item.paymentFrequency && <Text>{item.paymentFrequency}</Text>}
              </Box>
              <Button
                onClick={item.onClick}
                isDisabled={item.isActive}
                isLoading={item.isLoading}
              >
                {item.isActive ? selectedButtonText : selectButtonText}
              </Button>
              {item.features?.length > 0 && (
                <>
                  <Box my={1}>
                    <Divider />
                  </Box>
                  <List>
                    {item.features.map((feature) => {
                      return (
                        <ListItem>
                          <ListIcon as={MdCheck} color="green.500" />
                          {feature}
                        </ListItem>
                      );
                    })}
                  </List>
                </>
              )}
              {item.isRecomented && (
                <Text
                  fontSize={"sm"}
                  fontWeight={"bold"}
                  position={"absolute"}
                  top={"0.5rem"}
                  right={"0.5rem"}
                  bgGradient={recomendedGradient}
                  paddingX={"0.25rem"}
                  borderRadius={"md"}
                  color={"white"}
                >
                  {recomendedText}
                </Text>
              )}
            </VStack>
          </Box>
        );
      })}
    </HStack>
  );
};
