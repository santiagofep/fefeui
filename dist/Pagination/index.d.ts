import * as React from "react";
interface PaginationProps {
    next: string | null;
    previous: string | null;
    totalCount: number;
    onChange: (urlSearch: URLSearchParams) => void;
    pageCount?: number;
    itemsName?: string;
}
export declare const Pagination: React.FC<PaginationProps>;
export {};
