import {CheckSquare} from "lucide-react";

export default function WaitlistSuccess() {
    return (
        <div className="w-fit mx-auto my-4 text-center space-y-4 shadow-lg shadow-black/10 rounded-md p-4 relative">
            <h2 className="flex items-center w-fit mx-auto gap-2 text-xl md:text-2xl leading-tight tracking-tight font-bold text-primary">
                You're on the list!
                <span><CheckSquare className={`size-5 text-primary-dark`} /></span>
            </h2>
            <p className="text-black/70 font-bold max-w-[350px] w-full">
                We'll send you updates about Divyd as we roll out features. Stay tuned!
            </p>
        </div>
    );
}