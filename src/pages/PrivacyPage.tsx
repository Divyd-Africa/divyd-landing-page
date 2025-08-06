import NavBar from "components/shared/NavBar";
import {Eye, Lock, Server, Shield} from "lucide-react";
import {Container} from "components/layout/Container";
import {useInView} from "hooks/useInView";

export const PrivacyPage = () => {
    const policies = [
        {
            element: <Shield className={`size-6 md:size-8 text-white`}/>,
            title: "Data Protection",
            description: "Always the one covering transport? Never getting reimbursed? We feel you."
        },
        {
            element: <Eye className={`size-6 md:size-8 text-white`}/>,
            title: "Transparency",
            description: "Group dinners are fun until it's time to split the bill and everyone disappears."
        },
        {
            element: <Server className={`size-6 md:size-8 text-white`}/>,
            title: "Minimal Data",
            description: "Subscriptions add up. Everyone enjoys, but somehow you're always the one paying.",
        }
    ]

    const whatWillWeCover = [
        "How we collect and use your data.",
        "Your rights and controls.",
        "Data sharing policies",
        "International data transfers",
    ]

    const ourCommitments = [
        "GDPR and local compliance.",
        "No selling of personal data.",
        "Right to delete your data.",
        "Regular security audits."
    ]

    const cards = [
        {
            title: "🔐 What We'll Cover",
            lists: whatWillWeCover
        },
        {
            title: "🛡️ Our Commitments",
            lists: ourCommitments
        }
    ]

    const [ref, isInView] = useInView<HTMLDivElement>();

    return (
        <div>
            <NavBar/>
            <section className="relative px-6 py-8 bg-[var(-color-background)] border-[2px] shadow-lg border-white rounded-[25px] mx-3.5 my-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glow"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>

                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div
                            className="inline-flex items-center px-4 py-2 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm bg-white/80 mb-4">
                            <Lock className="size-4 text-primary mr-2"/>
                            <span className="text-sm font-medium text-muted-foreground">Your Data, Your Control</span>
                        </div>

                        <h1 className="text-heading-two animate-scale-in leading-[90%] font-bold text-black mb-4 lg:mb-6">
                            Privacy <span className="bg-gradient-to-r from-black to-primary-dark bg-clip-text text-transparent">Policy</span>
                        </h1>

                        <p className="text-lg animate-fade-in-up text-black/80 max-w-2xl mx-auto -mt-2">
                            Your privacy matters to us. Here's how we protect, respect, and handle your personal information.
                        </p>
                    </div>
                </div>
            </section>
            <section
                className="py-8 bg-[var(-color-background)] border-[2px] shadow-lg border-white rounded-[25px] mx-3.5 my-3 overflow-hidden">
                <Container className={`h-full`}>
                    <section className={``}>
                        <div className={`flex flex-wrap gap-5 md:gap-10 w-fit mx-auto`}>
                            {policies.map(feature => (

                                <div key={feature.title}
                                     className={`border-[0.5px] border-primary-dark/10 bg-white/90 rounded-xl p-4 md:p-6 shadow-lg shadow-primary/20 space-y-2 max-w-[330px] mx-auto hover:scale-[103%] hover:shadow-xl transition-all ${
                                         isInView ? "animate-scale-in opacity-100" : "opacity-0 translate-y-6"
                                     }`}>
                                    <div  className={`bg-gradient-to-br from-primary-dark via-primary-dark to-black/80 p-2.5 rounded-md w-fit`}>{feature.element}</div>
                                    <p ref={ref} className={`font-bold text-[20px] leading-tight`}>{feature.title}</p>
                                    <p className={`font-black/90`}>{feature.description}</p>
                                </div>
                            ))}
                        </div>

                    </section>
                </Container>
            </section>

            <section className="relative px-6 py-1 bg-[var(-color-background)] border-[2px] shadow-lg border-white rounded-[25px] mx-3.5 my-3 overflow-hidden">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        {/* Coming Soon Card */}
                        <div className="glass-effect rounded-3xl p-4 border border-white/10 text-center">
                            <div className="size-14 bg-gradient-to-br from-primary-dark to-black rounded-xl flex items-center justify-center mx-auto mb-2 shadow-2xl">
                                <Lock className="size-7 text-white"/>
                            </div>

                            <h2 className="text-3xl font-bold text-foreground mb-6">
                                Detailed Privacy Policy Coming Soon
                            </h2>

                            <p className="text-md animate-fade-in-up text-black/80 max-w-xl mx-auto -mt-2">
                                We're working with privacy experts and legal professionals to create a comprehensive privacy policy that puts you in control. Complete details will be available before public release.
                            </p>

                            {/* Feature Preview */}
                            <div className="flex flex-col md:flex-row gap-6 w-fit mx-auto my-8">
                                {cards.map((card, index) => (
                                         <div key={index} className="border-[0.5px] border-primary-dark/10 rounded-xl p-4 lg:p-10 lg:text-left shadow-lg shadow-black/20 space-y-2 max-w-[330px] hover:scale-[103%] transition-all">
                                             <div className={``}>
                                                 <h3 className="font-bold text-center md:text-left text-[18px]">
                                                     {card.title}
                                                 </h3>
                                             </div>
                                             <ul className="text-sm font-medium space-y-1 text-black/70 text-muted-foreground list-disc">
                                                 {card.lists.map((card, index) => (
                                                     <li className={`ml-3`} key={index}>{card}</li>
                                                 ))}
                                             </ul>
                                         </div>
                                     ))
                                }
                            </div>

                            <div className="inline-flex bg-white/70 backdrop-blur-2xl p-3 items-center px-6 bg-surface-elevated rounded-2xl border border-white/10">
                                <span className="text-muted-foreground text-sm">🧡 Privacy-first approach baked into every feature we build
                                </span>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="my-8 text-center text-[15px]">
                            <p className="mb-4 md:mb-1 font-bold">
                                Privacy questions or concerns?
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                                <a
                                    href="mailto:info@divydapp.ng"
                                    className="text-primary-dark hover:text-success transition-colors duration-300 font-medium flex items-center space-x-2"
                                >
                                    <Lock className="w-4 h-4" />
                                    <span>info@Divydapp.ng</span>
                                </a>
                                <span className="text-muted-foreground hidden md:block">•</span>
                                <a
                                    href="mailto:info@divydapp.ng"
                                    className="text-primary-dark hover:text-success transition-colors duration-300 font-medium flex items-center space-x-2"
                                >
                                    <Shield className="w-4 h-4" />
                                    <span>Data Protection Officer</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};