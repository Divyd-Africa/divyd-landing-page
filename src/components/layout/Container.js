import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
export const Container = ({ children, className, maxWidth, ref }) => {
    return (_jsx("section", { ref: ref, style: { maxWidth: maxWidth ? `${maxWidth}px` : "1440px" }, className: `container-box ${className}`, children: children }));
};
