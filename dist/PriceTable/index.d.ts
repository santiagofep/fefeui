import * as React from "react";
interface PriceTableProps {
    selectButtonText?: string;
    selectedButtonText?: string;
    recomendedText?: string;
    gradient?: string;
    data: {
        title: string;
        price: number;
        paymentFrequency?: string;
        features: string[];
        isActive: boolean;
        onClick: () => void;
        isRecomented?: boolean;
        isLoading?: boolean;
        trial?: string;
    }[];
}
export declare const PriceTable: React.FC<PriceTableProps>;
export {};
