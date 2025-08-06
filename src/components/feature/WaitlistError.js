import { jsx as _jsx } from "react/jsx-runtime";
export default function WaitlistError({ message }) {
    return (_jsx("p", { className: "text-red-500 text-[10px] font-medium text-center", children: message }));
}
