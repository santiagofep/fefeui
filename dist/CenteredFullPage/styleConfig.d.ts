export declare const CenteredFullPage: {
    baseStyle?: {
        wrapper: {
            minHeight: string;
        };
        center: {
            minHeight: string;
        };
        inner: {};
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("wrapper" | "inner" | "center")[];
        }>;
    } | undefined;
    variants?: {
        ghost: {
            wrapper: {
                bgGradient: string;
            };
            inner: {
                maxWidth: string;
            };
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "ghost" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("wrapper" | "inner" | "center")[];
};
