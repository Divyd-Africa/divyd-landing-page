import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import WaitlistSuccess from "./WaitlistSuccess";
import WaitlistInput from "./WaitlistInput";
import WaitlistError from "./WaitlistError";
export default function WaitlistForm() {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
    const API_URL = import.meta.env.VITE_WAITLIST_API_URL;
    useEffect(() => {
        const scriptId = "recaptcha-script";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
            script.async = true;
            script.defer = true;
            script.id = scriptId;
            document.body.appendChild(script);
        }
    }, [SITE_KEY]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            setError("Please fill in all fields.");
            return;
        }
        setIsSubmitting(true);
        setError("");
        try {
            if (!window.grecaptcha)
                throw new Error("reCAPTCHA not loaded");
            await new Promise((resolve) => window.grecaptcha.ready(() => resolve()));
            const token = await window.grecaptcha.execute(SITE_KEY, { action: "submit" });
            if (!token || typeof token !== "string" || token.length < 50)
                throw new Error("Failed reCAPTCHA check. Are you human?");
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ full_name: formData.name, email: formData.email })
            });
            if (!res.ok)
                throw new Error("Failed to submit form.");
            setIsSubmitted(true);
            setFormData({ name: "", email: "" });
        }
        catch (err) {
            console.error(err);
            setError("reCAPTCHA failed or network error. Please try again.");
        }
        finally {
            setIsSubmitting(false);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    if (isSubmitted)
        return _jsx(WaitlistSuccess, {});
    return (_jsxs("form", { onSubmit: handleSubmit, className: "w-full max-w-md mx-auto space-y-3 px-2 py-4 md:mx-0", children: [_jsx(WaitlistInput, { type: "text", name: "name", placeholder: "Enter your name", value: formData.name, onChange: handleInputChange }), _jsx(WaitlistInput, { type: "email", name: "email", placeholder: "Enter your email", value: formData.email, onChange: handleInputChange }), error && _jsx(WaitlistError, { message: error }), _jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full font-medium border-primary-light shadow-primary/20 shadow-lg bg-primary-dark hover:bg-primary-dark/80 text-white py-1.5 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer", children: isSubmitting ? "Joining..." : "Join the Waitlist" })] }));
}
