import {Container} from "components/layout/Container";
import {Car, ForkKnife, Play, Sparkles} from "lucide-react";
import {useInView} from "hooks/useInView";

const TiredOfChasing = () => {
    const sectionOne = [
        {
            element: <Car className={`size-6 md:size-8 text-white`}/>,
            title: "You paid for Uber. No one sends you the money back.",
            description: "Always the one covering transport? Never getting reimbursed? We feel you."
        },
        {
            element: <ForkKnife className={`size-6 md:size-8 text-white`}/>,
            title: "Dinner was ₦18k. Everyone's suddenly offline.",
            description: "Group dinners are fun until it's time to split the bill and everyone disappears."
        },
        {
            element: <Play className={`size-6 md:size-8 text-white`}/>,
            title: "You pay for Netflix — they all stream and vanish.\n",
            description: "Subscriptions add up. Everyone enjoys, but somehow you're always the one paying.",
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
                        <span>Real Problems, Real Solutions</span>
                    </div>
                    <h2 className={`text-heading-two font-bold leading-[101%] text-center tracking-tight`}>
                        Tired of chasing your friends for money ?
                    </h2>
                    <p ref={ref} className={`text-black/80 font-medium text-center leading-tight max-w-[450px] mx-auto`}>We
                        understand the struggle. Here's what happens too often in Nigerian friend groups.</p>

                    <div className={`flex flex-wrap gap-5 md:gap-10 w-fit mx-auto`}>
                        {sectionOne.map(feature => (

                            <div key={feature.title}
                                 className={`border-[0.5px] border-primary-dark/10 bg-white/90 rounded-xl p-4 md:p-6 shadow-lg shadow-primary/20 space-y-2 max-w-[330px] mx-auto hover:scale-[103%] hover:shadow-xl transition-all ${
                                     isInView ? "animate-scale-in opacity-100" : "opacity-0 translate-y-6"
                                 }`}>
                                <div  className={`bg-gradient-to-br from-primary-dark via-primary-dark to-black/80 p-2.5 rounded-md w-fit`}>{feature.element}</div>
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

export default TiredOfChasing;