import * as React from "react";
interface PaginationProps {
    next: string | null;
    previous: string | null;
    TotalCount: number;
    onChange: (newUrl: string) => void;
    pageCount?: number;
    itemsName?: string;
}
export declare const Pagination: React.FC<PaginationProps>;
export {};
