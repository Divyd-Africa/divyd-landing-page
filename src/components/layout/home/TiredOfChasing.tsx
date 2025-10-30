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
            title: "You pay for Netflix — they all stream and vanish.",
            description: "Subscriptions add up. Everyone enjoys, but somehow you're always the one paying.",
        }
    ]

    const [ref, isInView] = useInView<HTMLDivElement>();

    return (
        <section className="py-12 md:py-16 bg-[var(--color-background)]">
            <Container className="h-full">
                <section className="space-y-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-light/50 rounded-full mx-auto">
                        <Sparkles className="w-4 h-4 text-primary-dark"/>
                        <span className="text-sm font-medium text-primary-dark">Real Problems, Real Solutions</span>
                    </div>
                    
                    <h2 className="text-heading-two font-bold leading-[110%] tracking-tight">
                        Tired of chasing your friends for money?
                    </h2>
                    
                    <p ref={ref} className="text-primary-text/90 font-medium max-w-2xl mx-auto">
                        We understand the struggle. Here's what happens too often in Nigerian friend groups.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10">
                        {sectionOne.map((feature, index) => (
                            <div 
                                key={feature.title}
                                className={`bg-white rounded-xl p-6 shadow-lg border border-primary-light/50 space-y-4 max-w-[340px] transition-all hover:shadow-xl ${
                                    isInView ? "animate-scale-in opacity-100" : "opacity-0 translate-y-6"
                                }`}
                                style={{ transitionDelay: isInView ? `${index * 100}ms` : '0ms' }}
                            >
                                <div className="bg-gradient-to-br from-primary-dark to-primary p-3 rounded-lg w-fit mx-auto">
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

export default TiredOfChasing;