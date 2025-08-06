import NavBar from "components/shared/NavBar";
import {FileText, Scale, Shield} from "lucide-react";

export const TermsPage = () => {
    return (
        <div>
            <NavBar />
            <section className="relative px-6 py-8 bg-[var(-color-background)] border-[2px] shadow-lg border-white rounded-[25px] mx-3.5 my-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-glow"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>

                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div
                            className="inline-flex items-center px-4 py-2 bg-surface-elevated rounded-full border border-white/10 backdrop-blur-sm mb-1">
                            <Scale className="size-4 text-primary mr-2"/>
                            <span className="text-sm font-medium text-muted-foreground">Legal Documentation</span>
                        </div>

                        <h1 className="text-heading-two animate-scale-in leading-[90%] font-bold text-black mb-4 lg:mb-6">
                            Terms of <span className="bg-gradient-to-r from-primary-text to-primary-dark bg-clip-text text-transparent">Service</span>
                        </h1>

                        <p className="text-lg animate-fade-in-up text-black/80 max-w-2xl mx-auto -mt-2">
                            Clear, transparent terms for our community. No hidden surprises,
                            just honest guidelines.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative px-6 py-1 bg-[var(-color-background)] border-[2px] shadow-lg border-white rounded-[25px] mx-3.5 my-3 overflow-hidden">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        {/* Coming Soon Card */}
                        <div className="glass-effect rounded-3xl p-4 border border-white/10 text-center">
                            <div className="size-14 bg-gradient-to-br from-primary-dark to-black rounded-xl flex items-center justify-center mx-auto mb-2 shadow-2xl">
                                <FileText className="size-7 text-white"/>
                            </div>

                            <h2 className="text-3xl font-bold text-foreground mb-6">
                                Coming Soon
                            </h2>

                            <p className="text-md animate-fade-in-up text-black/80 max-w-xl mx-auto -mt-2">
                                Our comprehensive Terms of Service will be available when Divyd
                                launches. We're working with legal experts to ensure every
                                detail protects both you and our community.
                            </p>

                            {/* Feature Preview */}
                            <div className="flex flex-col md:flex-row gap-6 w-fit mx-auto my-4">
                                <div className="border-[0.5px] border-primary-dark/10 bg-white/90 rounded-xl p-4 shadow-lg shadow-primary/10 space-y-2 max-w-[330px] mx-auto hover:scale-[103%] transition-all">
                                    <div className={`flex gap-2 items-center mx-auto w-fit`}>
                                        <Shield className="size-8 text-primary"/>
                                        <h3 className="font-bold text-[18px] text-foreground">User Protection</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Clear guidelines on data protection, privacy, and user
                                        rights
                                    </p>
                                </div>

                                <div className="border-[0.5px] border-primary-dark/10 bg-white/90 rounded-xl p-4 shadow-lg shadow-primary/10 space-y-2 max-w-[330px] mx-auto hover:scale-[103%] transition-all">
                                    <div className={`flex gap-2 items-center mx-auto w-fit`}>
                                        <Scale className="size-8 text-primary"/>
                                        <h3 className="font-bold text-[18px] text-foreground">Fair Usage</h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        Transparent policies on platform usage and community
                                        standards
                                    </p>
                                </div>
                            </div>

                            <div className="inline-flex items-center px-6 bg-surface-elevated rounded-2xl border border-white/10">
                                <span className="text-muted-foreground text-sm">
                                    📧<strong>Want updates?</strong> Join our waitlist to be notified when our terms are published
                                </span>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="text-center -mt-2">
                            <p className="text-muted-foreground">
                                Questions about our upcoming terms?{" "}
                                <a href="mailto:divydafrica@gmail.com"
                                    className="text-primary hover:text-success transition-colors duration-300 font-medium"
                                >
                                    <strong>Contact our legal team</strong>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};