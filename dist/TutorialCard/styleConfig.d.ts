export declare const TutorialCard: {
    baseStyle?: {
        wrapper: {};
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: "wrapper"[];
        }>;
    } | undefined;
    variants?: {
        card: {
            wrapper: {
                shadow: string;
                borderRadius: string;
                background: string;
            };
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "card" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: "wrapper"[];
};
