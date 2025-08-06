import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [buttonText, setButtonText] = useState("Join Waitlist");
    useEffect(() => {
        if (location.pathname === "/") {
            setButtonText("Join Waitlist");
        }
        else {
            setButtonText("Back Home");
        }
    }, [location.pathname]);
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return (_jsx("nav", { className: " w-full z-50 animate-fade-in-up", children: _jsxs("div", { className: "flex py-3.5 px-[clamp(20px,calc(20px+60*((100vw-375px)/1185)),80px)]\n                  items-center justify-between shadow-sm border border-primary-light\n                  shadow-primary/10 rounded-full bg-white max-w-[1440px] mt-3 mx-3", children: [_jsxs("div", { onClick: () => navigate('/'), className: "flex gap-1 items-center cursor-pointer", children: [_jsx("img", { className: "size-[25px]", src: '/logo.svg', alt: "logo" }), _jsx("p", { className: "font-bold text-[20px] tracking-wide bg-gradient-to-r from-primary-text to-primary-dark bg-clip-text text-transparent", children: "Divyd" })] }), _jsxs("div", { className: "flex gap-2.5 items-center", children: [location.pathname === "/" && _jsx("p", { onClick: () => navigate('/faq'), className: "text-[14px] cursor-pointer hover:font-bold font-medium transition-all", children: "FAQ" }), _jsx("button", { onClick: () => location.pathname === "/" ? scrollToSection("waitlist") : navigate("/"), className: "bg-primary-dark font-medium border-primary-light shadow-primary/20 shadow-lg text-white rounded-full p-1.5 px-5 text-[14px] transition-all cursor-pointer hover:scale-[103%]", children: buttonText })] })] }) }));
};
export default NavBar;
