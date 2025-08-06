import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from "components/layout/Container";
import { Bell, CreditCard, LucideSmartphone, Shield, Sparkles, Users } from "lucide-react";
import { useInView } from "hooks/useInView";
const EverythingYouNeed = () => {
    const sectionThree = [
        {
            element: _jsx(Users, { className: `size-6 md:size-8 text-white` }),
            title: "Simple group bill tracking.",
            description: "Add friends, split one time, recurring bills and track balances."
        },
        {
            element: _jsx(CreditCard, { className: `size-6 md:size-8 text-white` }),
            title: "Divyd Wallet.",
            description: "Deposit, track and transfer money instantly, send funds to other users, withdraw to your bank or keep your balance ready for easy repayments"
        },
        {
            element: _jsx(Bell, { className: `size-6 md:size-8 text-white` }),
            title: "Smart reminders",
            description: "Push notifications to remind you of upcoming payments and deadlines, keeping repayments smooth and on-time.",
        },
        {
            element: _jsx(LucideSmartphone, { className: `size-6 md:size-8 text-white` }),
            title: "Add friends easily",
            description: "Effortlessly add friends to shared expenses using email, phone number. Divyd usernames make it simple to connect and settle up together.",
        },
        {
            element: _jsx(Shield, { className: `size-6 md:size-8 text-white` }),
            title: "Pre-approved transfers",
            description: "Enable automatic deductions for shared expenses within a set limit, simplifying repayments and removing the need for manual confirmations.",
        }
    ];
    const [ref, isInView] = useInView();
    return (_jsx("section", { className: "py-8 bg-[var(-color-background)] border-[2px] shadow-lg border-white rounded-[25px] mx-3.5 my-3 overflow-hidden", children: _jsx(Container, { className: `h-full`, children: _jsxs("section", { className: `space-y-4`, children: [_jsxs("div", { className: "inline-flex items-center gap-0.5 bg-orange-50 border border-orange-200 rounded-full px-3 py-1.5 text-sm font-medium text-orange-700", children: [_jsx(Sparkles, { className: "w-4 h-4 text-primary-dark mr-2" }), _jsx("span", { children: "All in One Place" })] }), _jsx("h2", { className: `text-heading-two font-bold leading-[101%] text-center tracking-tight`, children: "Everything you Need" }), _jsx("p", { className: `text-black/80 font-medium text-center leading-tight max-w-[450px] mx-auto`, children: "Powerful features designed specifically for Nigerian social spending and group dynamics." }), _jsx("div", { className: `flex flex-wrap gap-5 md:gap-8 w-fit mx-auto`, children: sectionThree.map(feature => (_jsxs("div", { ref: ref, className: `border-[0.5px] border-primary-dark/10 bg-gradient-to-br from-white to-primary-light/50 rounded-xl p-4 md:px-6 space-y-2 max-w-[330px] mx-auto shadow-lg hover:shadow-xl hover:scale-[103%] transition-all flex gap-2.5 ${isInView ? "animate-scale-in opacity-100" : "opacity-0 translate-y-6"}`, children: [_jsx("div", { className: `bg-gradient-to-br from-primary-dark to-black p-2.5 rounded-md w-fit h-fit`, children: feature.element }), _jsxs("div", { className: `gap-1.5 flex flex-col`, children: [_jsx("p", { className: `font-bold text-[20px] leading-tight`, children: feature.title }), _jsx("p", { className: `font-black/90`, children: feature.description })] })] }, feature.title))) })] }) }) }));
};
export default EverythingYouNeed;
