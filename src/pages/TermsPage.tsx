import NavBar from "components/shared/NavBar";
import { Scale, FileText } from "lucide-react";
import { Container } from "components/layout/Container";

export const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbf8f4] via-white to-[#fff9f5]">
      <NavBar />

      {/* Header Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-primary-dark/5 rounded-full blur-3xl -z-0"></div>

        <Container className="text-center max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full border border-primary-light backdrop-blur-sm mb-6">
            <Scale className="w-4 h-4 text-primary-dark" />
            <span className="text-sm font-medium text-primary-text">
              Legal Agreement
            </span>
          </div>

          <h1 className="text-heading-two font-bold text-primary-text mb-6">
            Terms of{" "}
            <span className="bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">
              Service
            </span>
          </h1>

          <p className="text-lg text-primary-text/80 max-w-2xl mx-auto">
            Clear, transparent terms for our community. No hidden surprises,
            just honest guidelines.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-primary-text/70">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>
                Effective:{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <main className="pb-16 -mt-8">
        <Container className="max-w-[1024px] w-full">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-primary-light/50 max-w-[1024px] w-full mx-auto shadow-xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary-dark/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-primary-dark/10 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              <article className="prose prose-sm md:prose-base max-w-[1024px] w-full mx-auto">
                <div className="text-center mb-8 pb-6 border-b border-primary-light">
                  <h2 className="text-primary-text font-bold text-xl md:text-2xl">
                    Terms of Service
                  </h2>
                  <p className="text-primary-dark/80 mt-2">
                    Last Updated:{" "}
                    {new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <h3 className="text-primary-text font-semibold text-lg mt-6 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    1
                  </span>
                  Introduction
                </h3>
                <p>
                  Welcome to Divyd. These Terms of Service ("Terms") govern your
                  use of Divyd and its related services. By accessing or using
                  the App, you agree to these Terms and our Privacy Policy. If
                  you do not agree, do not use the App.
                </p>

                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    2
                  </span>
                  Eligibility
                </h3>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Users must be 13 years or older.</li>
                  <li>
                    By using the App, you represent that you meet the age
                    requirement and have the legal authority to enter into these
                    Terms.
                  </li>
                </ul>

                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    3
                  </span>
                  Account Registration
                </h3>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>You may register via Google Sign-In or email.</li>
                  <li>
                    You are responsible for maintaining confidentiality of your
                    login credentials.
                  </li>
                  <li>
                    You agree to provide accurate and complete information
                    during registration.
                  </li>
                </ul>

                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    4
                  </span>
                  User Content
                </h3>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>
                    All bills and transactions you create are visible to
                    participants you explicitly invite.
                  </li>
                  <li>
                    You are responsible for content you share; do not share
                    illegal or harmful material.
                  </li>
                  <li>
                    Divyd may remove content that violates these Terms or
                    applicable law.
                  </li>
                </ul>

                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    5
                  </span>
                  Payment & Transactions
                </h3>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Divyd integrates Kora to process wallet transfers.</li>
                  <li>We do not store credit card information.</li>
                  <li>
                    Transactions are your responsibility — ensure correctness
                    before sending.
                  </li>
                </ul>

                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    6
                  </span>
                  Prohibited Activities
                </h3>
                <p>Users may not:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Use the App for illegal purposes.</li>
                  <li>Interfere with or disrupt App functionality.</li>
                  <li>
                    Attempt to access accounts or data of other users without
                    permission.
                  </li>
                </ul>

                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    7
                  </span>
                  Data Collection & Privacy
                </h3>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>
                    We collect: Name, email, phone number, Authentication
                    credentials (Google tokens, passwords), FCM token for
                    notifications, Transaction/bill records
                  </li>
                  <li>Bills are visible only to participants.</li>
                  <li>
                    Third-party services (Kora for payments, Sentry for crash
                    reporting) may process data on our behalf.
                  </li>
                  <li>We do not sell or monetize user data.</li>
                  <li>Sensitive data is encrypted.</li>
                </ul>
                <p className="mt-3">See the full Privacy Policy for details.</p>

                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    8
                  </span>
                  Data Retention & Deletion
                </h3>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>We retain data while your account is active.</li>
                  <li>
                    A deletion workflow will be implemented; once live, users
                    may request deletion.
                  </li>
                </ul>

                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    9
                  </span>
                  Security
                </h3>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>
                    We implement reasonable technical and organizational
                    measures to protect your data.
                  </li>
                  <li>
                    Transmission uses TLS; sensitive data (passwords, PINs) is
                    encrypted at rest.
                  </li>
                </ul>

                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    10
                  </span>
                  Termination
                </h3>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>
                    Divyd may suspend or terminate accounts that violate these
                    Terms.
                  </li>
                  <li>
                    You may terminate your account by contacting support;
                    deletion will be processed according to the retention
                    workflow.
                  </li>
                </ul>

                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    11
                  </span>
                  Limitation of Liability
                </h3>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Divyd is provided "as is."</li>
                  <li>
                    We are not liable for indirect, incidental, or consequential
                    damages arising from use of the App.
                  </li>
                  <li>Use of the App is at your own risk.</li>
                </ul>

                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    12
                  </span>
                  Changes to Terms & Privacy Policy
                </h3>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>We may update these Terms or the Privacy Policy.</li>
                  <li>
                    Updates are effective immediately upon posting within the
                    App or on our website.
                  </li>
                  <li>Continued use indicates acceptance.</li>
                </ul>

                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">
                    13
                  </span>
                  Contact Us
                </h3>
                <p>
                  For questions or concerns about these Terms or our Privacy
                  Policy:
                </p>
                <div className="mt-4 p-4 bg-gradient-to-r from-primary-light/30 to-white rounded-lg border border-primary-light">
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:divyd.africa@gmail.com"
                      className="text-primary-dark hover:underline"
                    >
                      divyd.africa@gmail.com
                    </a>
                  </p>
                  <p className="mt-2">
                    Website:{" "}
                    <a
                      href="https://divyd.africa"
                      className="text-primary-dark hover:underline"
                    >
                      https://divyd.africa
                    </a>
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-primary-text/70 text-sm">
              © {new Date().getFullYear()} Divyd. All rights reserved.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
};