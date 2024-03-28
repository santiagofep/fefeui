import {
  AspectRatioProps,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

export interface ButtonProps extends ChakraButtonProps {
  href?: string;
  target?: string;
}

export interface VideoProps {
  src: string;
  thumbnailSrc?: string;
  embed?: boolean;
  ratio?: AspectRatioProps["ratio"];
}
