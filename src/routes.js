import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { TermsPage } from "pages/TermsPage";
import { PrivacyPage } from "pages/PrivacyPage";
import { FaqPage } from "pages/FAQPage";
import { NotFoundPage } from "pages/NotFoundPage";
export const router = createBrowserRouter([
    { path: "/", element: _jsx(HomePage, {}) },
    { path: "/faq", element: _jsx(FaqPage, {}) },
    { path: "/privacy-policy", element: _jsx(PrivacyPage, {}) },
    { path: "/terms-of-service", element: _jsx(TermsPage, {}) },
    { path: "*", element: _jsx(NotFoundPage, {}) }
]);
