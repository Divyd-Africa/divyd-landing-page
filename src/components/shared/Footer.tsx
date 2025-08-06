import { Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
    const footerLinks = ['Terms of Service', 'Privacy Policy', 'FAQ']

    return (
        <footer className="bg-gradient-to-br from-black via-black  to-primary-dark text-white py-12 px-4 rounded-t-[25px] rounded-b-[10px] mx-3.5 my-3 overflow-hidden">
            <div className="container-box max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
                    {/* Logo Section */}
                    <div className={`flex gap-1 items-center`}>
                        <img className={`size-[25px]`} src={'/logo.svg'} alt="logo" />
                        <p className="font-bold font-body tracking-wide bg-gradient-to-r from-white to-primary-dark bg-clip-text text-transparent text-[20px]">
                            Divyd
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
                        {footerLinks.map((link) => (
                            <a key={`link`} href={`/${link.trim().toLowerCase().split(' ').join('-')}`}
                               className="text-orange-100 hover:text-white transition-colors duration-300 underline-offset-4">
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-3">
                        <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://x.com/Divydapp"
                            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:border-white/40 text-orange-100 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-white/20"
                        >
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.instagram.com/divydapp/"
                            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:border-white/40 text-orange-100 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-white/20"
                        >
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://linkedin.com/company/divydapp"
                            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:border-white/40 text-orange-100 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-white/20"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer noopener"
                            href="https://www.tiktok.com/@divydapp"
                            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 hover:border-white/40 text-orange-100 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-white/20"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-white/20 mt-8 pt-6 text-center text-orange-100 text-sm font-medium flex flex-col md:flex-row font-bold">
                    <p>&copy; 2025 Divyd</p>
                    <p>Built for Nigerians, by Nigerians. 🇳🇬</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
