import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [buttonText, setButtonText] = useState("Join Waitlist");

    useEffect(() => {
        if (location.pathname === "/") {
            setButtonText("Join Waitlist");
        } else {
            setButtonText("Back Home");
        }
    }, [location.pathname]);

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <nav className="w-full mx-auto max-w-[1380px] z-50 animate-fade-in-up">
            <nav className="py-3.5 animate-fade-in-up rounded-full bg-white mt-3 mx-3 ">

                <div className={`flex justify-between items-center  max-w-[1440px] mx-auto w-full px-[clamp(20px,calc(20px+60*((100vw-375px)/1185)),80px)]`}>
                    <div onClick={() => navigate('/')} className="flex gap-1 items-center cursor-pointer">
                        <img className="size-[25px]" src={'/logo.svg'} alt="logo"/>
                        <p className="font-bold text-[20px] tracking-wide bg-gradient-to-r from-primary-text to-primary-dark bg-clip-text text-transparent">
                            Divyd
                        </p>
                    </div>

                    <div className="flex gap-4 items-center">
                        {location.pathname === "/" && (
                            <p onClick={() => navigate('/faq')}
                               className="text-[14px] cursor-pointer hover:font-bold font-medium transition-all text-primary-text">FAQ</p>
                        )}
                        {location.pathname !== "/terms" && (
                            <p onClick={() => navigate('/terms')}
                               className="text-[14px] cursor-pointer hover:font-bold font-medium transition-all text-primary-text">Terms of Service</p>
                        )}
                        {location.pathname !== "/privacy" && (
                            <p onClick={() => navigate('/privacy')}
                               className="text-[14px] cursor-pointer hover:font-bold font-medium transition-all text-primary-text">Privacy Policy</p>
                        )}
                        <button onClick={() =>
                            location.pathname === "/" ? scrollToSection("waitlist") : navigate("/")
                        }
                                className="bg-gradient-to-r from-primary-dark to-primary font-medium text-white rounded-lg p-1.5 px-5 text-[14px] transition-all cursor-pointer hover:scale-[103%] hover:shadow-lg">
                            {buttonText}
                        </button>
                    </div>
                </div>

            </nav>
        </nav>

    );
};

export default NavBar;