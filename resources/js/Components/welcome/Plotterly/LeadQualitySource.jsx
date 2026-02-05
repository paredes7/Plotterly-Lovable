// resources/js/Components/welcome/Sections/LeadQualitySource.jsx
import { motion } from "framer-motion";

export default function LeadQualitySource() {
    return (
        <section className="bg-[#2196F3] py-20 px-6 md:px-0">
            {/* CONTENEDOR PRINCIPAL: 
                - max-w-5xl asegura que no se pegue a los bordes en PC.
                - shadow-2xl y border crean profundidad sobre el azul.

            */}

            <div className="mb-8 items-center text-center flex justify-center">
                <span className="bg-white text-[#ef4444] text-[13px] font-bold px-5 py-2 rounded-full shadow-md border border-gray-50 flex items-center gap-2 uppercase tracking-tight">
                    ✨ Start Growing Today
                </span>
            </div>

            <div className="container mx-auto max-w-5xl bg-white rounded-[3rem] p-8 
            md:p-10 relative overflow-hidden /* BORDE NARANJA SUTIL */
                border-[1.5px] border-[#ef4444]/20 
                shadow-[0_0_50px_rgba(255,255,255,0.8)]">

          
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#ef4444]/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ef4444]/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                   


                    <h2 className="text-[#1e293b] text-4xl md:text-[64px] font-[900] leading-[1.1] mb-6 tracking-[-0.02em]">
                        Fix Lead Quality at the <br />
                        <span className="text-[#ef4444] relative inline-block font-[900] tracking-[-0.01em]">
                            Source
                        
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0,5 Q50,10 100,5" stroke="#ef4444" strokeWidth="3" fill="transparent" opacity="0.3" />
                            </svg>
                        </span>
                    </h2>

                  
                    <p className="text-gray-500 md:text-[24px] md:text-xl font-medium mb-2">
                        Your sales team doesn't need more hustle.
                    </p>
                    <p className="text-[#1e293b] text-lg md:text-[24px] font-extrabold mb-8">
                        They need better leads.
                    </p>

                    <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed mb-12">
                        Plotterly gives commercial contractors a smarter way to generate targeted B2B
                        prospects — without brokers, expensive databases, or long onboarding.
                    </p>

                    <motion.button
                        onClick={() => window.open('https://plotterly.com/register', '_blank')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#ef4444] text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-[0_15px_30px_rgba(239,68,68,0.4)] flex items-center gap-3 mb-10 transition-shadow hover:shadow-[0_20px_40px_rgba(239,68,68,0.5)]"
                    >
                        🚀 Start Free Today
                        <span className="text-xl">→</span>
                    </motion.button>

                    <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm font-semibold">
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                            No demo required
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                            No credit card
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#ef4444]" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" /></svg>
                            Cancel anytime
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}