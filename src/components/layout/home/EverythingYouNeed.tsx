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
        <section
            className="py-8 bg-[var(-color-background)] border-[2px] shadow-lg border-white rounded-[25px] mx-3.5 my-3 overflow-hidden">
            <Container className={`h-full`}>
                <section className={`space-y-4`}>
                    <div
                        className="inline-flex items-center gap-0.5 bg-orange-50 border border-orange-200 rounded-full px-3 py-1.5 text-sm font-medium text-orange-700">
                        <Sparkles className="w-4 h-4 text-primary-dark mr-2"/>
                        <span>All in One Place</span>
                    </div>
                    <h2 className={`text-heading-two font-bold leading-[101%] text-center tracking-tight`}>
                        Everything you Need
                    </h2>
                    <p ref={ref} className={`text-black/80 font-medium text-center leading-tight max-w-[450px] mx-auto`}>Powerful features designed specifically for Nigerian social spending and group dynamics.</p>

                    <div className={`flex flex-wrap gap-5 md:gap-8 w-fit mx-auto`}>
                        {sectionThree.map(feature => (
                            <div key={feature.title}
                                 className={`border-[0.5px] border-primary-dark/10 bg-gradient-to-br from-white to-primary-light/50 rounded-xl p-4 md:px-6 space-y-2 max-w-[330px] mx-auto shadow-lg hover:shadow-xl hover:scale-[103%] transition-all flex gap-2.5 ${
                                     isInView ? "animate-scale-in opacity-100" : "opacity-0 translate-y-6"
                                 }`}>
                                <div className={`bg-gradient-to-br from-primary-dark to-black p-2.5 rounded-md w-fit h-fit`}>{feature.element}</div>
                                <div className={`gap-1.5 flex flex-col`}>
                                    <p className={`font-bold text-[20px] leading-tight`}>{feature.title}</p>
                                    <p className={`font-black/90`}>{feature.description}</p>
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