import {Container} from "components/layout/Container";
import {Bell, CreditCard, LucideSmartphone, Shield, Sparkles, Users} from "lucide-react";
import {useInView} from "hooks/useInView";

const EverythingYouNeed = () => {
    const sectionThree = [
        {
            element: <Users className={`size-6 md:size-8 text-white`}/>,
            title: "Simple group bill tracking.",
            description: "Add friends, split one time, recurring bills and track balances."
        },
        {
            element: <CreditCard className={`size-6 md:size-8 text-white`}/>,
            title: "Divyd Wallet.",
            description: "Deposit, track and transfer money instantly, send funds to other users, withdraw to your bank or keep your balance ready for easy repayments"
        },
        {
            element: <Bell className={`size-6 md:size-8 text-white`}/>,
            title: "Smart reminders",
            description: "Push notifications to remind you of upcoming payments and deadlines, keeping repayments smooth and on-time.",
        },
        {
            element: <LucideSmartphone className={`size-6 md:size-8 text-white`}/>,
            title: "Add friends easily",
            description: "Effortlessly add friends to shared expenses using email, phone number. Divyd usernames make it simple to connect and settle up together.",
        },
        {
            element: <Shield className={`size-6 md:size-8 text-white`}/>,
            title: "Pre-approved transfers",
            description: "Enable automatic deductions for shared expenses within a set limit, simplifying repayments and removing the need for manual confirmations.",
        }
    ]

    const [ref, isInView] = useInView<HTMLDivElement>();

    return (
        <section className="py-12 md:py-16 bg-[var(--color-background)]">
            <Container className="h-full">
                <section className="space-y-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light/50 rounded-full mx-auto">
                        <Sparkles className="w-4 h-4 text-primary-dark mr-2"/>
                        <span className="text-sm font-medium text-primary-dark">All in One Place</span>
                    </div>
                    
                    <h2 className="text-heading-two font-bold leading-[110%] tracking-tight">
                        Everything you Need
                    </h2>
                    
                    <p ref={ref} className="text-primary-text/90 font-medium max-w-2xl mx-auto">
                        Powerful features designed specifically for Nigerian social spending and group dynamics.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10">
                        {sectionThree.map((feature, index) => (
                            <div 
                                key={feature.title}
                                className={`bg-gradient-to-br from-white to-primary-light/50 rounded-xl p-6 space-y-4 max-w-[380px] shadow-lg border border-primary-light/50 transition-all hover:shadow-xl flex gap-4 ${
                                    isInView ? "animate-scale-in opacity-100" : "opacity-0 translate-y-6"
                                }`}
                                style={{ transitionDelay: isInView ? `${index * 100}ms` : '0ms' }}
                            >
                                <div className="bg-gradient-to-br from-primary-dark to-black p-3 rounded-lg w-fit h-fit">
                                    {feature.element}
                                </div>
                                <div className="gap-2 flex flex-col text-left">
                                    <h3 className="font-bold text-lg leading-tight text-primary-text">{feature.title}</h3>
                                    <p className="text-primary-text/80">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </section>
    );
};

export default EverythingYouNeed;