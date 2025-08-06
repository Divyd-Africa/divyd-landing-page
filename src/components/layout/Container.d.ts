import type { ReactNode } from "react";
import * as React from "react";
interface ContainerProps {
    children: ReactNode;
    ref?: React.Ref<HTMLElement>;
    className?: string;
    maxWidth?: number;
}
export declare const Container: React.FC<ContainerProps>;
export {};
