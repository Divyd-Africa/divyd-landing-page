import {Container} from "components/layout/Container";
import {Shield, Sparkles, Star, Zap} from "lucide-react";
import WaitlistForm from "components/feature/WaitlistForm";
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
        <main className="py-12 md:py-16 bg-white/90">
            <Container className="h-full">
                <section className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="text-center lg:text-left space-y-6 lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light/50 rounded-full mx-auto lg:mx-0">
                            <Sparkles className="w-4 h-4 text-primary-dark"/>
                            <span className="text-sm font-medium text-primary-dark">Nigeria's first social payment app 🇳🇬</span>
                        </div>

                        {/* Hero Text */}
                        <div className="space-y-2">
                            <h1 className="text-heading leading-[110%] font-heading font-bold text-primary-text">
                                <span className={`block transition-opacity duration-500 ${typewriterStage >= 1 ? "opacity-100" : "opacity-0"}`}>Split Bills.</span>
                                <span className={`block transition-opacity duration-500 bg-gradient-to-b from-primary-text to-primary-dark bg-clip-text text-transparent ${typewriterStage >= 2 ? "opacity-100" : "opacity-0"}`}>Send Reminders.</span>
                                <span className={`block transition-opacity duration-500 ${typewriterStage >= 3 ? "opacity-100" : "opacity-0"} text-primary-dark bg-clip-text`}>Get Paid.</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-[14px] md:text-[17.5px] text-primary-text/90 leading-relaxed max-w-[330px] mx-auto lg:mx-0 font-medium">
                            Track who owes what, set deadlines, and get your money without awkward chats.
                        </p>

                        {/* Quick Features */}
                        <div className="font-medium text-primary-text/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
                            {quickFeatures.map(feature => (
                                <p key={feature.text} className="flex items-center gap-2 text-[14px]">
                                    <span className="text-primary-dark">{feature.element}</span>
                                    <span className="font-medium">{feature.text}</span>
                                </p>
                            ))}
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2 w-full max-w-md mx-auto">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-primary-light/50 transition-all hover:shadow-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-light/50 rounded-full mb-4">
                                <Sparkles className="w-4 h-4 text-primary-dark"/>
                                <span className="text-xs font-medium text-primary-dark">Early Access</span>
                            </div>

                            <h2 className="font-bold text-xl mb-2">Join the Waitlist</h2>
                            <p className="font-medium text-[15px] text-primary-text/90 mb-4">Be first to experience the future of group payments in Nigeria.</p>
                            <WaitlistForm/>
                            <p className="text-xs text-center text-primary-text/70 mt-3">By joining the waitlist, you agree to receive updates about Divyd's launch.</p>
                        </div>
                    </div>
                </section>
            </Container>
        </main>
    );
};

export default HeroArea;