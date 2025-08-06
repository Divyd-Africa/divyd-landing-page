import {Container} from "components/layout/Container";
import {ArrowUpRight, Shield, Sparkles, Star, Zap} from "lucide-react";
import WaitlistForm from "components/feature/WaitlistForm";
import {useInView} from "hooks/useInView";

const CtaSection = () => {

    const [ref, isInView] = useInView<HTMLDivElement>();

    return (
        <section id={'waitlist'}
            className="py-8 bg-[#FEFEFE] border-[0.5px] border-primary-dark/20 shadow-lg rounded-[25px] mx-3.5 my-3 overflow-hidden">
            <Container className={`h-full`}>
                <section className={`space-y-4`}>
                    <div
                        className="inline-flex items-center gap-0.5 bg-orange-50 border border-orange-200 rounded-full px-3 py-1.5 text-sm font-medium text-orange-700">
                        <Sparkles className="w-4 h-4 text-primary-dark mr-2"/>
                        <span>Launch Coming Soon</span>
                    </div>
                    <h2 className={`text-heading max-w-[800px] mx-auto font-bold leading-[90%] text-center tracking-tight`}>
                        Join the Waitlist to <span className={`bg-gradient-to-r from-primary-text to-primary-dark bg-clip-text text-transparent`}>Divyd</span> your money
                    </h2>
                    <p className={`text-black/80 font-medium text-center leading-tight max-w-[600px] mx-auto mt-10`}>Be among the first to experience stress-free group expense management. Early users get premium features free for life.</p>

                    <div ref={ref} className={`bg-white ${
                        isInView ? "animate-scale-in opacity-100" : "opacity-0 translate-y-6"
                    }`}>
                        <div className="max-w-2xl mx-auto relative mb-8 animate-scale-in">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 via-primary/10 to-primary/20 blur-3xl rounded-3xl"></div>

                            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl lg:rounded-[2.5rem] p-4 lg:p-10 border border-primary-dark/30 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                                <div className="text-center mb-2">
                                    <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-black to-primary-dark text-white rounded-full text-sm font-semibold mb-4 animate-pulse-gentle">
                                        <Sparkles className="w-4 h-4 mr-2" />
                                        Limited Early Access
                                    </div>
                                    <h3 className="text-xl lg:text-3xl xl:text-3xl font-bold text-black mb-2">Secure Your Divyd</h3>
                                    <p className="text-black/80 text-[12px] sm:text-base lg:text-[14px]">
                                        Join 1000+ Nigerians already on the waitlist
                                    </p>
                                </div>

                                <div className={`mx-auto w-fit`}>
                                    <WaitlistForm />
                                </div>

                                <div className="flex items-center justify-center space-x-6 mt-2 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <Shield className="w-4 h-4 mr-1 text-orange-500" />
                                        <span>Secure & Private</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Zap className="w-4 h-4 mr-1 text-orange-500" />
                                        <span>Instant Access</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 mr-1 text-orange-500" />
                                        <span>Premium Features</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                            className="group text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center mx-auto space-x-2 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                        >
                            <span>Back to Top</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>
                </section>
            </Container>
        </section>
    );
};

export default CtaSection;