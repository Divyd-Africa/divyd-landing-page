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
        <section className="py-8 bg-[#FEFEFE] border-[0.5px] border-primary-dark/20 shadow-sm rounded-[25px] mx-3.5 my-3 overflow-hidden">
            <Container className={`h-full`}>
                <section className={`space-y-4`}>
                    <div className="inline-flex items-center gap-0.5 bg-orange-50 border border-orange-200 rounded-full px-3 py-1.5 text-sm font-medium text-orange-700">
                        <Sparkles className="w-4 h-4 text-primary-dark mr-2" />
                        <span>Simple as 1,2,3</span>
                    </div>
                    <h2 className={`text-heading-two font-bold leading-[101%] text-center tracking-tight`}>
                        How It Works
                    </h2>
                    <p ref={ref} className={`text-black/80 font-medium text-center leading-tight max-w-[450px] mx-auto`}>Three simple steps to never chase money again. Built for the modern Nigerian.</p>

                    <div className={`flex flex-wrap gap-5 md:gap-10 w-fit mx-auto`}>
                        {sectionTwo.map((feature, index) => (
                            <div key={feature.title} className={`border-[0.5px] border-primary-dark/10 bg-gradient-to-br from-white to-primary-light rounded-xl p-4 md:px-6 space-y-2 max-w-[330px] mx-auto shadow-lg hover:shadow-xl hover:scale-[103%] transition-all text-center relative ${
                                isInView ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-6"
                            }`}>
                                <p className={`absolute top-3 right-3 bg-primary-dark text-white rounded-full p-1 size-6 text-[10px] font-bold shadow-xl shadow-primary-dark/50 block`}>{index + 1}</p>
                                <div className={`bg-primary-dark p-2.5 rounded-md w-fit mx-auto`}>{feature.element}</div>
                                <p className={`font-bold text-[20px] leading-tight`}>{feature.title}</p>
                                <p className={`font-black/90`}>{feature.description}</p>
                            </div>
                        ))}
                    </div>

                </section>
            </Container>
        </section>
    );
};

export default SectionComponent;