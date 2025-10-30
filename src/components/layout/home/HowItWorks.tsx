import {Container} from "components/layout/Container";
import {Bell, CreditCard, LucideSmartphone, Sparkles} from "lucide-react";
import {useInView} from "hooks/useInView";

const SectionComponent = () => {
    const sectionTwo = [
        {
            element: <LucideSmartphone className={`size-6 md:size-8 text-white`} />,
            title: "Log a Transaction",
            description: "Add the amount and select people involved. Snap a receipt or enter manually"
        },
        {
            element: <Bell className={`size-6 md:size-8 text-white`} />,
            title: "Send Reminders.",
            description: "Set deadlines and send gentle push notifications or WhatsApp reminders."
        },
        {
            element: <CreditCard className={`size-6 md:size-8 text-white`} />,
            title: "Get Paid",
            description: "They pay you via card through a third party system. Money hits your account instantly.",
        }
    ]

    const [ref, isInView] = useInView<HTMLDivElement>();

    return (
        <section className="py-12 md:py-16">
            <Container className="h-full">
                <section className="space-y-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light/50 rounded-full mx-auto">
                        <Sparkles className="w-4 h-4 text-primary-dark" />
                        <span className="text-sm font-medium text-primary-dark">Simple as 1,2,3</span>
                    </div>
                    
                    <h2 className="text-heading-two font-bold leading-[110%] tracking-tight">
                        How It Works
                    </h2>
                    
                    <p ref={ref} className="text-primary-text/90 font-medium max-w-2xl mx-auto">
                        Three simple steps to never chase money again. Built for the modern Nigerian.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10">
                        {sectionTwo.map((feature, index) => (
                            <div 
                                key={feature.title} 
                                className={`bg-gradient-to-br from-white to-primary-light rounded-xl p-6 space-y-4 max-w-[340px] shadow-lg border border-primary-light/50 transition-all hover:shadow-xl text-center relative ${
                                    isInView ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"
                                }`}
                                style={{ transitionDelay: isInView ? `${index * 100}ms` : '0ms' }}
                            >
                                <div className="absolute top-4 right-4 bg-primary-dark text-white rounded-full p-2 size-8 text-sm font-bold shadow-lg">
                                    {index + 1}
                                </div>
                                <div className="bg-primary-dark p-3 rounded-lg w-fit mx-auto">
                                    {feature.element}
                                </div>
                                <h3 className="font-bold text-lg leading-tight text-primary-text">{feature.title}</h3>
                                <p className="text-primary-text/80">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </section>
    );
};

export default SectionComponent;