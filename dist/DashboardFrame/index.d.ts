import * as React from "react";
import { HeaderProps } from "../Header";
import { SidebarProps } from "../Sidebar";
interface DashboardFrameProps {
    header: HeaderProps;
    sidebar: SidebarProps;
    children: React.ReactNode;
}
export declare const DashboardFrame: React.FC<DashboardFrameProps>;
export {};
