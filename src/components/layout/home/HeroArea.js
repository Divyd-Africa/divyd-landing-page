import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from "components/layout/Container";
import { Shield, Sparkles, Star, Zap } from "lucide-react";
import WaitlistForm from "components/feature/WaitlistForm";
import BillSplit from "assets/img/BillSplitVisualization.png";
import { useEffect, useState } from "react";
const HeroArea = () => {
    const quickFeatures = [
        {
            element: _jsx(Shield, { className: `size-4` }),
            text: "Secure and private",
        },
        {
            element: _jsx(Zap, { className: `size-4` }),
            text: "Instant Access",
        },
        {
            element: _jsx(Star, { className: `size-4` }),
            text: "Premium Feature"
        }
    ];
    const [typewriterStage, setTypewriterStage] = useState(0);
    useEffect(() => {
        const stages = [
            { delay: 500, stage: 1 },
            { delay: 900, stage: 2 },
            { delay: 1200, stage: 3 },
        ];
        stages.forEach(({ delay, stage }) => {
            setTimeout(() => setTypewriterStage(stage), delay);
        });
    }, []);
    return (_jsx("main", { className: "py-8 bg-[#FEFEFE] border-[0.5px] border-primary-dark/20 min-h-[88vh] rounded-[25px] mx-3.5 my-3 overflow-hidden shadow-sm", children: _jsx(Container, { className: "h-full", children: _jsxs("section", { className: "flex flex-col md:flex-row items-center md:items-start gap-8", children: [_jsxs("div", { className: "text-center md:text-left space-y-4", children: [_jsxs("div", { className: "inline-flex items-center gap-0.5 bg-orange-50 border border-orange-200 rounded-full px-3 py-1.5 text-sm font-medium text-orange-700", children: [_jsx(Sparkles, { className: "w-4 h-4 text-primary-dark mr-2" }), _jsx("span", { children: "Nigeria's first social payment app \uD83C\uDDF3\uD83C\uDDEC" })] }), _jsx("div", { className: "space-y-0.5", children: _jsxs("h1", { className: "text-heading  leading-[110%] font-heading font-bold text-primary-text ", children: [_jsx("span", { className: `block transition-opacity duration-500 ${typewriterStage >= 1 ? "opacity-100" : "opacity-0"}`, children: "Split Bill." }), _jsx("span", { className: `block transition-opacity duration-500 bg-gradient-to-b from-primary-text to-primary-dark bg-clip-text text-transparent ${typewriterStage >= 2 ? "opacity-100" : "opacity-0"}`, children: "Send Reminders." }), _jsx("span", { className: `block transition-opacity duration-500 ${typewriterStage >= 3 ? "opacity-100" : "opacity-0"} text-primary-dark bg-clip-text`, children: "Get Paid." })] }) }), _jsx("p", { className: "text-[12px] sm:text-[14px] md:text-[17.5px] text-primary-text/90 leading-tight max-w-[330px] mx-auto md:mx-0 font-bold lg:max-w-[350px] animate-fade-in-up", children: "Track who owes what, set deadlines, and get your money without awkward chats." }), _jsx("div", { className: `font-medium text-black/80 flex items-center mt-6 gap-[8px] xsm:gap-4 leading-tight mx-auto w-fit md:mx-0`, children: quickFeatures.map(feature => (_jsxs("p", { className: `flex items-center text-left gap-[5px] text-[10px] md:text-[14px] w-fit`, children: [_jsx("span", { className: `text-primary-dark`, children: feature.element }), _jsx("span", { className: `font-medium typewriter`, children: feature.text })] }, feature.text))) }), _jsxs("div", { className: `bg-gradient-to-br from-white via-white to-primary-light border-black/20 border-[0.2px] shadow-lg shadow-primary-dark/20 p-2 hover:shadow-xl hover:scale-[101%] w-fit transition-all rounded-lg my-4 sm:p-4 animate-scale-in`, children: [_jsxs("div", { className: "inline-flex items-center gap-0.5 bg-orange-50 border border-orange-200 rounded-full px-2.5 py-1 text-[10px] font-medium text-primary-dark mb-3", children: [_jsx(Sparkles, { className: "w-4 h-4 text-primary-dark mr-2" }), _jsx("span", { children: "Early Access" })] }), _jsx("h2", { className: `font-bold md:text-[18px] tracking-tight`, children: "Join the Waitlist" }), _jsx("p", { className: `font-medium text-[13px] md:text-[15px] leading-[1.2] text-black/90`, children: "Be first to experience the future of group payments in Nigeria." }), _jsx(WaitlistForm, {}), _jsx("p", { className: `text-[10px] text-center text-black/70 leading-tight`, children: "By joining the waitlist, you agree to receive updates about Divyd's launch." })] })] }), _jsx("div", { className: `mx-auto w-fit -mt-5 md:mt-14 animate-scale-in`, children: _jsx("img", { className: `max-w-[550px] animate-bounce-gentle w-full`, src: BillSplit, alt: `BillSplit` }) })] }) }) }));
};
export default HeroArea;
