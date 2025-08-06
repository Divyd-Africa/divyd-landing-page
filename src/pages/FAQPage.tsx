import NavBar from "components/shared/NavBar";
import Footer from "components/shared/Footer";
import FaqItem from "components/layout/FaqItem";

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const FaqPage = () => {
    const faqData: FAQItem[] = [
        {
            id: 1,
            question: "What does Divyd do and how does it work?",
            answer: "Divyd is a social-first finance app that simplifies how friends and small groups manage shared expenses. Whether it's splitting bills, tracking who owes what, or repaying each other, Divyd makes the process seamless and stress-free.",
        },
        {
            id: 2,
            question: "Do I need to link my bank account?",
            answer: "No, not at all. To make transfers, all you need to do is fund your Divyd Wallet. Once set up, you can easily receive, or transfer money securely and in real-time, with no complex steps or external apps required.",
        },
        {
            id: 3,
            question: "Is Divyd safe to use?",
            answer: "Yes! Divyd uses industry-standard encryption and powered by a 3rd party trusted payment provider to protect your data.",
        },
        {
            id: 4,
            question: "How is this different from just sending money with my bank app?",
            answer: "DIVYD helps track, remind, and repay shared expenses automatically,no awkward texts or forgotten transfers rather then the traditional bank apps.",
        },
        {
            id: 5,
            question: "What is Pre-approved transfers and how does it work?",
            answer:
                "Pre-Approved Transfers allow you to authorize automatic deductions for shared expenses up to a set limit. Once a transaction is logged by the person who paid, Divyd immediately debits your approved amount from your linked card or Divyd Wallet — no manual confirmation needed. This makes repayments faster, smoother, and more reliable among trusted connections.",
        },
    ];
    return (
        <div>
            <NavBar/>
            <section className="py-8 bg-[var(-color-background)] border-[2px] shadow-lg border-white rounded-[25px] mx-3.5 my-3 overflow-hidden">
                <div className="pt-6 pb-4 px-4 sm:px-6">
                    <div className="container mx-auto max-w-4xl">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h1 className="text-heading-two animate-scale-in leading-[90%] font-bold text-black mb-4 lg:mb-6">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-lg animate-fade-in-up text-black/80 max-w-2xl mx-auto -mt-2">
                                Everything you need to know about <span className={`font-bold text-primary-dark`}>Divyd</span>  and how it works.
                            </p>
                        </div>

                        {/* FAQ Items */}
                        <div className="space-y-4">
                            {faqData.map((item, index) => (
                                <FaqItem key={index} item={item} />
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="text-center mt-10">
                            <div className="bg-gradient-to-r from-primary-light to-white rounded-3xl p-8 border border-primary-dark/30">
                                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-2">
                                    Still have questions?
                                </h3>
                                <p className="text-black/70 mb-3 max-w-2xl mx-auto font-medium">
                                    Can't find what you're looking for? Reach out to our support
                                    team and we'll get back to you as soon as possible. Contact us
                                    at <strong className={`text-black font-bold`}>divydafrica@gmail.com</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
);
};