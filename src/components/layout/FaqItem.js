import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronUp } from "lucide-react";
import React, { useState } from "react";
const FaqItem = ({ item }) => {
    const [openItems, setOpenItems] = useState([]);
    const toggleItem = (id) => {
        setOpenItems((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]);
    };
    return (_jsxs("div", { className: "bg-white rounded-2xl border border-primary-dark/30 hover:border-primary-dark transition-all duration-300 animate-slide-up cursor-pointer", style: { animationDelay: `${(item.id - 1) * 0.1}s` }, children: [_jsxs("button", { onClick: () => toggleItem(item.id), className: `w-full cursor-pointer p-6 text-left flex items-center justify-between hover:bg-primary-light/70  transition-all rounded-2xl ${openItems.includes(item.id) ? 'bg-primary-light/70' : ''}`, children: [_jsx("h3", { className: "text-lg lg:text-xl font-semibold text-black pr-4", children: item.question }), _jsx("div", { className: "flex-shrink-0", children: _jsx(ChevronUp, { className: `w-5 h-5 transform transition-transform duration-300 ${openItems.includes(item.id) ? 'rotate-180 text-primary' : 'rotate-0 text-primary'}` }) })] }), _jsx("div", { className: `overflow-hidden transition-all duration-350 ease-in-out ${openItems.includes(item.id) ? 'max-h-[500px] opacity-100 py-3 px-6' : 'max-h-0 opacity-0 py-0 px-6'}`, children: _jsx("div", { className: "border-t border-primary-dark/30", children: _jsx("p", { className: "text-gray-600 leading-relaxed mt-4", children: item.answer }) }) })] }, item.id));
};
export default FaqItem;
