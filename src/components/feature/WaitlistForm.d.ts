declare global {
    interface Window {
        grecaptcha: {
            execute(siteKey: string, options: {
                action: string;
            }): Promise<string>;
            ready(cb: () => void): void;
        };
    }
}
export default function WaitlistForm(): import("react/jsx-runtime").JSX.Element;
