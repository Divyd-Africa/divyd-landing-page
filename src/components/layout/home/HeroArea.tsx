import {Container} from "components/layout/Container";
import {Shield, Sparkles, Star, Zap} from "lucide-react";
import WaitlistForm from "components/feature/WaitlistForm";
import BillSplit from "assets/img/BillSplitVisualization.png";
import {useEffect, useState} from "react";

const HeroArea = () => {
    const quickFeatures = [
        {
            element: <Shield className={`size-4`} />,
            text: "Secure and private",
        },
        {
            element: <Zap  className={`size-4`} />,
            text: "Instant Access",
        },
        {
            element: <Star  className={`size-4`} />,
            text: "Premium Feature"
        }
    ]

    const [typewriterStage, setTypewriterStage] = useState(0)
    useEffect(() => {
        const stages = [
            { delay: 500, stage: 1 },
            { delay: 900, stage: 2 },
            { delay: 1200, stage: 3 },
        ]

        stages.forEach(({ delay, stage }) => {
            setTimeout(() => setTypewriterStage(stage), delay)
        })
    }, [])

    return (
        <main
            className="py-8 bg-[#FEFEFE] border-[0.5px] border-primary-dark/20 min-h-[88vh] rounded-[25px] mx-3.5 my-3 overflow-hidden shadow-sm">
            <Container className="h-full">
                <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="text-center md:text-left space-y-4">
                        <div
                            className="inline-flex items-center gap-0.5 bg-orange-50 border border-orange-200 rounded-full px-3 py-1.5 text-sm font-medium text-orange-700">
                            <Sparkles className="w-4 h-4 text-primary-dark mr-2"/>
                            <span>Nigeria's first social payment app 🇳🇬</span>
                        </div>

                        {/* Hero Text */}
                        <div className="space-y-0.5">
                            <h1 className="text-heading  leading-[110%] font-heading font-bold text-primary-text ">
                                <span className={`block transition-opacity duration-500 ${typewriterStage >= 1 ? "opacity-100" : "opacity-0"}`}>Split Bills.</span>
                                <span className={`block transition-opacity duration-500 bg-gradient-to-b from-primary-text to-primary-dark bg-clip-text text-transparent ${typewriterStage >= 2 ? "opacity-100" : "opacity-0"}`}>Send Reminders.</span>
                                <span className={`block transition-opacity duration-500 ${typewriterStage >= 3 ? "opacity-100" : "opacity-0"} text-primary-dark bg-clip-text`}>Get Paid.</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-[12px] sm:text-[14px] md:text-[17.5px] text-primary-text/90 leading-tight max-w-[330px] mx-auto md:mx-0 font-bold lg:max-w-[350px] animate-fade-in-up">
                            Track who owes what, set deadlines, and get your money without awkward chats.
                        </p>

                        {/* Quick Features */}
                        <div
                            className={`font-medium text-black/80 flex items-center mt-6 gap-[8px] xsm:gap-4 leading-tight mx-auto w-fit md:mx-0`}>
                            {quickFeatures.map(feature => (
                                <p key={feature.text}
                                   className={`flex items-center text-left gap-[5px] text-[10px] md:text-[14px] w-fit`}>
                                    <span className={`text-primary-dark`}>{feature.element}</span>
                                    <span className={`font-medium typewriter`}>{feature.text}</span>
                                </p>
                            ))}
                        </div>

                        {/* Waitlist Modal */}
                        <div
                            className={`bg-gradient-to-br from-white via-white to-primary-light border-black/20 border-[0.2px] shadow-lg shadow-primary-dark/20 p-2 hover:shadow-xl hover:scale-[101%] w-fit transition-all rounded-lg my-4 sm:p-4 animate-scale-in`}>
                            <div
                                className="inline-flex items-center gap-0.5 bg-orange-50 border border-orange-200 rounded-full px-2.5 py-1 text-[10px] font-medium text-primary-dark mb-3">
                                <Sparkles className="w-4 h-4 text-primary-dark mr-2"/>
                                <span>Early Access</span>
                            </div>

                            <h2 className={`font-bold md:text-[18px] tracking-tight`}>Join the Waitlist</h2>
                            <p className={`font-medium text-[13px] md:text-[15px] leading-[1.2] text-black/90`}>Be first
                                to experience the future of group payments in Nigeria.</p>
                            <WaitlistForm/>
                            <p className={`text-[10px] text-center text-black/70 leading-tight`}>By joining the
                                waitlist, you agree to receive updates about Divyd's launch.</p>
                        </div>

                    </div>
                    <div
                        className={`mx-auto w-fit -mt-5 md:mt-14 animate-scale-in`}>
                        <img className={`max-w-[550px] animate-bounce-gentle w-full`} src={BillSplit} alt={`BillSplit`}/>
                    </div>
                </section>
            </Container>
        </main>
    );
};

export default HeroArea;