import React from "react";

interface WaitlistInputProps {
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function WaitlistInput({ type, name, placeholder, value, onChange}: WaitlistInputProps) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full text-[15px] border border-primary-dark/50 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary-dark/50 focus:border-transparent placeholder:text-[14px]"
        />
    );
}
