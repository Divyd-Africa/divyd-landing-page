interface WaitlistErrorProps {
    message: string;
}

export default function WaitlistError({ message }: WaitlistErrorProps) {
    return (
        <p className="text-red-500 text-[10px] font-medium text-center">
            {message}
        </p>
    );
}
