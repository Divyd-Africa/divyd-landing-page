import NavBar from "components/shared/NavBar"
import Footer from "components/shared/Footer";
import TiredOfChasing from "components/layout/home/TiredOfChasing";
import HowItWorks from "components/layout/home/HowItWorks";
import EverythingYouNeed from "components/layout/home/EverythingYouNeed";
import HeroArea from "components/layout/home/HeroArea";
import CtaSection from "components/layout/home/CTASection";
import {useEffect, useState} from "react";

export const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
            setIsVisible(window.scrollY > 100)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <main id={`hero`} className={`relative`}>
            <NavBar />
            <HeroArea />
            <TiredOfChasing />
            <HowItWorks />
            <EverythingYouNeed />
            <CtaSection />
            <Footer />
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
                    <button onClick={() => scrollToSection("waitlist")} className="bg-primary-dark font-medium border-primary-light shadow-primary/20 shadow-lg text-white rounded-lg p-1.5 px-5 text-[14px] transition-all cursor-pointer hover:scale-[103%] animate-bounce-gentle">
                        Join Waitlist
                    </button>
                </div>
            )}
        </main>
    )
}
