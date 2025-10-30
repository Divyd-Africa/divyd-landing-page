import {Container} from "components/layout/Container";
import {ArrowUpRight, Shield, Sparkles, Star, Zap} from "lucide-react";
import WaitlistForm from "components/feature/WaitlistForm";
import {useInView} from "hooks/useInView";

const CtaSection = () => {

    const [ref, isInView] = useInView<HTMLDivElement>();

    return (
        <section id={'waitlist'} className="py-12 md:py-16 ">
            <Container className="h-full">
                <section className="space-y-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light/50 rounded-full mx-auto">
                        <Sparkles className="w-4 h-4 text-primary-dark mr-2"/>
                        <span className="text-sm font-medium text-primary-dark">Launch Coming Soon</span>
                    </div>
                    
                    <h2 className="text-heading max-w-3xl mx-auto font-bold leading-[110%] tracking-tight">
                        Join the Waitlist to <span className="bg-gradient-to-r from-primary-text to-primary-dark bg-clip-text text-transparent">Divyd</span> your money
                    </h2>
                    
                    <p className="text-primary-text/90 font-medium max-w-2xl mx-auto">
                        Be among the first to experience stress-free group expense management. Early users get premium features free for life.
                    </p>

                    <div ref={ref} className={`max-w-3xl mx-auto ${
                        isInView ? "animate-scale-in opacity-100" : "opacity-0 translate-y-6"
                    }`}>
                        <div className="relative mb-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/10 via-primary/5 to-primary/10 blur-3xl rounded-3xl"></div>

                            <div className="relative bg-white rounded-2xl p-8 border border-primary-light/50 shadow-xl transition-all duration-500 hover:shadow-2xl">
                                <div className="text-center mb-6">
                                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-dark to-primary text-white rounded-full text-sm font-semibold mb-4">
                                        <Sparkles className="w-4 h-4 mr-2" />
                                        Limited Early Access
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary-text mb-2">Secure Your Divyd</h3>
                                    <p className="text-primary-text/80">
                                        Join 1000+ Nigerians already on the waitlist
                                    </p>
                                </div>

                                <div className="mx-auto w-full max-w-md">
                                    <WaitlistForm />
                                </div>

                                <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-primary-text/70">
                                    <div className="flex items-center">
                                        <Shield className="w-4 h-4 mr-2 text-primary-dark" />
                                        <span>Secure & Private</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Zap className="w-4 h-4 mr-2 text-primary-dark" />
                                        <span>Instant Access</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 mr-2 text-primary-dark" />
                                        <span>Premium Features</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
                            className="group text-primary-dark hover:text-primary font-medium flex items-center justify-center mx-auto space-x-2 transition-all duration-300 hover:scale-105"
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