"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialCard = void 0;
const React = require("react");
const react_1 = require("@chakra-ui/react");
const md_1 = require("react-icons/md");
const TutorialCard = ({ title, description, video, onClose, button1, button2, }) => {
    return (<react_1.Box position={"relative"}>
      <react_1.HStack justifyContent={"space-between"} borderRadius={"md"} overflow={"hidden"} shadow={"md"} flexWrap={["wrap", "nowrap"]} flexDirection={["column-reverse", "column-reverse", "row"]}>
        <react_1.VStack align={"stretch"} padding={5} spacing={2}>
          <react_1.Heading size="md">{title}</react_1.Heading>
          <react_1.Text>{description}</react_1.Text>
          {button1 || button2 ? (<react_1.HStack>
              {button1 && (<react_1.Button size={"sm"} {...button1.buttonProps}>
                  {button1.label}
                </react_1.Button>)}
              {button2 && (<react_1.Button size="sm" {...button2.buttonProps}>
                  {button2.label}
                </react_1.Button>)}
            </react_1.HStack>) : null}
        </react_1.VStack>
        <react_1.AspectRatio ratio={16 / 9} minW={"300px"} width={["100%", "100%", "fit-content"]}>
          {video ? (<iframe src={video.url} allowFullScreen/>) : (<react_1.Image src="https://cdn.shopify.com/s/files/1/0628/3047/7483/files/2150836116.jpg?v=1710883876" objectFit="cover"/>)}
        </react_1.AspectRatio>
      </react_1.HStack>
      {onClose && (<react_1.IconButton aria-label="" position={"absolute"} top="0.25rem" right="0.25rem" size="xs" onClick={onClose}>
          <md_1.MdClose />
        </react_1.IconButton>)}
    </react_1.Box>);
};
exports.TutorialCard = TutorialCard;
