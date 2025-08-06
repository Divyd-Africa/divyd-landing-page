import React from "react";
interface WaitlistInputProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function WaitlistInput({ type, name, placeholder, value, onChange }: WaitlistInputProps): import("react/jsx-runtime").JSX.Element;
export {};
