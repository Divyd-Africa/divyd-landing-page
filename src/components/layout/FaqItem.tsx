import {ChevronUp} from "lucide-react";
import type {FAQItem} from "pages/FAQPage";
import React, {useState} from "react";

interface FaqItemProps {
    item: FAQItem;
}

const FaqItem: React.FC<FaqItemProps> = ({item}) => {

    const [openItems, setOpenItems] = useState<number[]>([]);
    const toggleItem = (id: number) => {
        setOpenItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
        );
    };

    return (
        <div key={item.id}
             className="bg-white rounded-2xl border border-primary-dark/30 hover:border-primary-dark transition-all duration-300 animate-slide-up cursor-pointer"
             style={{animationDelay: `${(item.id - 1) * 0.1}s`}}>
            <button
                onClick={() => toggleItem(item.id)}
                className={`w-full cursor-pointer p-6 text-left flex items-center justify-between hover:bg-primary-light/70  transition-all rounded-2xl ${openItems.includes(item.id)? 'bg-primary-light/70' : ''}`}>
                <h3 className="text-lg lg:text-xl font-semibold text-black pr-4">
                    {item.question}
                </h3>
                <div className="flex-shrink-0">
                    <ChevronUp
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                            openItems.includes(item.id) ? 'rotate-180 text-primary' : 'rotate-0 text-primary'
                        }`}
                    />
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-350 ease-in-out ${
                    openItems.includes(item.id) ? 'max-h-[500px] opacity-100 py-3 px-6' : 'max-h-0 opacity-0 py-0 px-6'
                }`}
            >
                <div className="border-t border-primary-dark/30">
                    <p className="text-gray-600 leading-relaxed mt-4">
                        {item.answer}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default FaqItem;