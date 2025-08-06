import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from "components/layout/Container";
import { Bell, CreditCard, LucideSmartphone, Sparkles } from "lucide-react";
import { useInView } from "hooks/useInView";
const SectionComponent = () => {
    const sectionTwo = [
        {
            element: _jsx(LucideSmartphone, { className: `size-6 md:size-8 text-white` }),
            title: "Log a Transaction",
            description: "Add the amount and select people involved. Snap a receipt or enter manually"
        },
        {
            element: _jsx(Bell, { className: `size-6 md:size-8 text-white` }),
            title: "Send Reminders.",
            description: "Set deadlines and send gentle push notifications or WhatsApp reminders."
        },
        {
            element: _jsx(CreditCard, { className: `size-6 md:size-8 text-white` }),
            title: "Get Paid",
            description: "They pay you via card through Flutterwave. Money hits your account instantly.",
        }
    ];
    const [ref, isInView] = useInView();
    return (_jsx("section", { className: "py-8 bg-[#FEFEFE] border-[0.5px] border-primary-dark/20 shadow-sm rounded-[25px] mx-3.5 my-3 overflow-hidden", children: _jsx(Container, { className: `h-full`, children: _jsxs("section", { className: `space-y-4`, children: [_jsxs("div", { className: "inline-flex items-center gap-0.5 bg-orange-50 border border-orange-200 rounded-full px-3 py-1.5 text-sm font-medium text-orange-700", children: [_jsx(Sparkles, { className: "w-4 h-4 text-primary-dark mr-2" }), _jsx("span", { children: "Simple as 1,2,3" })] }), _jsx("h2", { className: `text-heading-two font-bold leading-[101%] text-center tracking-tight`, children: "How It Works" }), _jsx("p", { className: `text-black/80 font-medium text-center leading-tight max-w-[450px] mx-auto`, children: "Three simple steps to never chase money again. Built for the modern Nigerian." }), _jsx("div", { className: `flex flex-wrap gap-5 md:gap-10 w-fit mx-auto`, children: sectionTwo.map((feature, index) => (_jsxs("div", { ref: ref, className: `border-[0.5px] border-primary-dark/10 bg-gradient-to-br from-white to-primary-light rounded-xl p-4 md:px-6 space-y-2 max-w-[330px] mx-auto shadow-lg hover:shadow-xl hover:scale-[103%] transition-all text-center relative ${isInView ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"}`, children: [_jsx("p", { className: `absolute top-3 right-3 bg-primary-dark text-white rounded-full p-1 size-6 text-[10px] font-bold shadow-xl shadow-primary-dark/50 block`, children: index + 1 }), _jsx("div", { className: `bg-primary-dark p-2.5 rounded-md w-fit mx-auto`, children: feature.element }), _jsx("p", { className: `font-bold text-[20px] leading-tight`, children: feature.title }), _jsx("p", { className: `font-black/90`, children: feature.description })] }, feature.title))) })] }) }) }));
};
export default SectionComponent;
