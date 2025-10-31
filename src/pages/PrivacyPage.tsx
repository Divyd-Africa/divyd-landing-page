import NavBar from "components/shared/NavBar";
import { Lock, Shield, FileText } from "lucide-react";
import { Container } from "components/layout/Container";

export const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbf8f4] via-white to-[#fff9f5]">
      <NavBar />
      
      {/* Header Section */}
      <section className="py-8 md:py-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-primary-dark/5 rounded-full blur-3xl -z-0"></div>
        
        <Container className="text-center max-w-[1024px] relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full border border-primary-light backdrop-blur-sm mb-6">
            <Lock className="w-4 h-4 text-primary-dark" />
            <span className="text-sm font-medium text-primary-text">Data Protection</span>
          </div>
          
          <h1 className="text-heading-two font-bold text-primary-text mb-6">
            Privacy <span className="bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">Policy</span>
          </h1>
          
          <p className="text-lg text-primary-text/80 max-w-2xl mx-auto">
            Your privacy is fundamental to our values. This policy explains how we collect, use, and protect your personal information.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-primary-text/70">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Effective: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Compliant with Financial Regulations</span>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Main Content */}
      <main className="pb-16">
        <Container className="max-w-[1024px] w-full">
          <div className="bg-white/80 max-w-[900px] w-full mx-auto backdrop-blur-sm rounded-2xl border border-primary-light/50 shadow-xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary-dark/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-primary-dark/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <article className="prose prose-sm md:prose-base max-w-[1024px] w-full mx-auto">
                <div className="text-center mb-8 pb-6 border-b border-primary-light">
                  <h2 className="text-primary-text font-bold text-xl md:text-2xl">Privacy Policy</h2>
                  <p className="text-primary-dark/80 mt-2">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                
                <h3 className="text-primary-text font-semibold text-lg mt-6 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">1</span>
                  Information We Collect
                </h3>
                
                <h4 className="text-primary-text font-medium mt-4 mb-2">Personal Information</h4>
                <p>We collect information you provide directly to us when using our services:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Name and contact details (email, phone number)</li>
                  <li>Account credentials (password, authentication tokens)</li>
                  <li>Financial information necessary for transactions</li>
                  <li>Communication preferences</li>
                </ul>
                
                <h4 className="text-primary-text font-medium mt-4 mb-2">Automatically Collected Information</h4>
                <p>We may automatically collect information when you interact with our services:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Device information (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent, features used)</li>
                  <li>Transaction details and billing information</li>
                  <li>Security and fraud prevention data</li>
                </ul>
                
                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">2</span>
                  How We Use Your Information
                </h3>
                <p>We use your information to provide, maintain, and improve our services:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>To authenticate your identity and secure your account</li>
                  <li>To process financial transactions and manage your account</li>
                  <li>To communicate with you about your account and services</li>
                  <li>To detect and prevent fraudulent or unauthorized activity</li>
                  <li>To comply with legal and regulatory requirements</li>
                  <li>To personalize your experience and improve our offerings</li>
                </ul>
                
                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">3</span>
                  Data Protection & Security
                </h3>
                <p>We implement industry-standard security measures to protect your information:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>End-to-end encryption for sensitive data transmission</li>
                  <li>Secure storage with advanced encryption protocols</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Strict access controls and authentication procedures</li>
                  <li>Employee training on data protection best practices</li>
                </ul>
                
                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">4</span>
                  Data Sharing & Disclosure
                </h3>
                <p>We do not sell your personal information. We may share data only in these circumstances:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li><strong>With Service Providers:</strong> Trusted partners who assist in delivering our services</li>
                  <li><strong>Legal Compliance:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transactions:</strong> In connection with mergers or acquisitions</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
                </ul>
                
                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">5</span>
                  Your Rights & Choices
                </h3>
                <p>You have control over your personal information:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate data</li>
                  <li>Delete your account and associated data by contacting us at divyd.africa@gmail.com</li>
                  <li>Opt out of marketing communications</li>
                  <li>Export your data in portable formats</li>
                </ul>
                
                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">6</span>
                  Data Retention
                </h3>
                <p>We retain your information for as long as necessary to provide our services and comply with legal obligations. Retention periods vary based on:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>The nature of the information and its sensitivity</li>
                  <li>Contractual and legal requirements</li>
                  <li>Business and operational needs</li>
                </ul>
                
                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">7</span>
                  International Data Transfers
                </h3>
                <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers, including:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Standard contractual clauses approved by regulators</li>
                  <li>Compliance with applicable data protection laws</li>
                  <li>Robust technical and organizational measures</li>
                </ul>
                
                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">8</span>
                  Policy Updates
                </h3>
                <p>We may update this policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes through our platform or by email.</p>
                
                <h3 className="text-primary-text font-semibold text-lg mt-8 mb-3 flex items-center gap-2">
                  <span className="bg-gradient-to-r from-primary-dark to-primary w-6 h-6 rounded-full flex items-center justify-center text-white text-xs">9</span>
                  Contact Us
                </h3>
                <p>If you have questions about this privacy policy or concerns about your privacy, please contact our Data Protection Officer:</p>
                <div className="mt-4 p-4 bg-gradient-to-r from-primary-light/30 to-white rounded-lg border border-primary-light">
                  <p className="font-semibold">Divyd Privacy Team</p>
                  <p>Email: <a href="mailto:privacy@divydapp.ng" className="text-primary-dark hover:underline"></a></p>
                  divyd.africa@gmail.com
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