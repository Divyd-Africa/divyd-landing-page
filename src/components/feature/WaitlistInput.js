import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
export default function WaitlistInput({ type, name, placeholder, value, onChange }) {
    return (_jsx("input", { type: type, name: name, placeholder: placeholder, value: value, onChange: onChange, className: "w-full text-[15px] border border-primary-dark/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary-dark/50 focus:border-transparent placeholder:text-[14px]" }));
}
