// resources/js/Components/welcome/Hero/HeroMain.jsx
import { motion } from "framer-motion";

export default function HeroMain() {
    return (
        <section className="bg-[#2196F3] pt-20 pb-12 px-6 overflow-hidden">

            <div className="container mx-auto max-w-5xl flex flex-col items-center text-center">

                <div className="mb-8">
                    <span className="inline-flex items-center gap-2 bg-[#eb5d4b] text-white text-[12px] md:text-[13px] font-black px-5 py-2 rounded-full shadow-lg uppercase tracking-wider">
                        <span className="bg-white text-[#ff6b57] rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                            🎯
                        </span>
                        Commercial Contractors
                    </span>
                </div>

                <h1 className="text-white text-4xl md:text-[64px] font-black leading-[1] mb-6 tracking-tight">
                    Your Sales Team Is Working {" "}
                    <span className="relative inline-block border-b-[6px] border-[#ff6b57]/40 leading-none">
                        Hard.
                    </span>
                    <br />
                    Your Leads Are the {" "}
                    <span className="bg-[#eb5d4b] px-4 py-1 rounded-xl shadow-2xl inline-block mt-2 md:mt-0">
                        Problem.
                    </span>
                </h1>

                <div className="max-w-2xl mb-12">
                    <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed mb-2">
                        If your reps are calling the wrong companies, the problem isn't sales execution.
                    </p>
                    <p className="text-white text-xl md:text-2xl font-bold">
                        It's lead quality.
                    </p>
                </div>

                <motion.a
                    href="https://plotterly.com/register"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#eb5d4b] text-white text-lg w-full justify-between max-w md:text-xl font-bold px-12 py-5 rounded-2xl shadow-[0_20px_40px_rgba(255,107,87,0.4)] flex items-center gap-4 transition-all hover:shadow-[0_25px_50px_rgba(255,107,87,0.5)] cursor-pointer"
                >
                    Create Your Free Account →
                    
                </motion.a>

                <p className="text-white/70 text-sm mt-6 font-medium">
                    Build targeted commercial lead lists — free
                </p>
            </div>
        </section>
    );
}