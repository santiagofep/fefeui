import {
  Box,
  Circle,
  Divider,
  HStack,
  Heading,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { MdCheck } from "react-icons/md";

export interface StepProps {
  title: string;
  description?: string;
}

export interface StepsProps {
  steps: StepProps[];
  currentStep: number;
  completedMessage?: string;
  currentMessage?: string;
  pendingMessage?: string;
}

export const Steps: React.FC<StepsProps> = ({
  steps,
  currentStep,
  completedMessage = "completed",
  currentMessage = "current",
  pendingMessage = "pending",
}) => {
  const currentStepData = steps[currentStep - 1];
  return (
    <>
      <Box
        marginX={"15px"}
        borderBottomColor={"gray.100"}
        borderBottom={"2px solid"}
        marginBottom={"-20px"}
        marginTop={"20px"}
      />
      <HStack justifyContent={"space-between"} align={"start"}>
        {steps.map((step, index) => {
          const stepNumber = index + 1;

          let stepStatus = "pending";
          let color = "gray";
          let stepIcon: number | React.ReactNode = stepNumber;
          let message = pendingMessage;
          if (stepNumber < currentStep) {
            stepStatus = "completed";
            stepIcon = <MdCheck />;
            color = "green";
            message = completedMessage;
          }
          if (stepNumber === currentStep) {
            stepStatus = "active";
            stepIcon = stepNumber;
            color = "gray";
            message = currentMessage;
          }

          return (
            <VStack
              spacing={0}
              width={"100%"}
              align={"center"}
              textAlign={"center"}
            >
              <Circle
                backgroundColor={"gray"}
                size={stepStatus === "active" ? "40px" : "30px"}
                marginTop={stepStatus !== "active" ? "5px" : "0px"}
                background={
                  stepStatus === "active" ? `${color}.900` : `${color}.50`
                }
                color={stepStatus === "active" ? "white" : `${color}.800`}
                border="2px solid"
                fontWeight={"bold"}
              >
                <Box>{stepIcon}</Box>
              </Circle>
              {stepStatus !== "active" && <Box height={"5px"}></Box>}
              <Heading size="sm">{step.title}</Heading>
              <Text>{step.description}</Text>
              <Text color={`${color}.800`}>{message}</Text>
            </VStack>
          );
        })}
      </HStack>
    </>
  );
};
