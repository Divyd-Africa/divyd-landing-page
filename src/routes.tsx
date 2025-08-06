import { createBrowserRouter } from "react-router-dom";
import {HomePage} from "pages/HomePage";
import {TermsPage} from "pages/TermsPage";
import {PrivacyPage} from "pages/PrivacyPage";
import {FaqPage} from "pages/FAQPage";
import {NotFoundPage} from "pages/NotFoundPage";

export const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/faq", element: <FaqPage /> },
    { path: "/privacy-policy", element: <PrivacyPage /> },
    { path: "/terms-of-service",  element: <TermsPage /> },
    { path: "*", element: <NotFoundPage /> }
]);