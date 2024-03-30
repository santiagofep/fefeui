export declare const FefeTable: {
    baseStyle?: {
        table: {
            border: string;
            borderColor: string;
            width: string;
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("table" | "cells")[];
        }>;
    } | undefined;
    variants?: {
        simple: {
            table: {};
        };
        compact: {
            table: {};
            cells: {
                paddingX: number;
                paddingY: number;
            };
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "simple" | "compact" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("table" | "cells")[];
};
