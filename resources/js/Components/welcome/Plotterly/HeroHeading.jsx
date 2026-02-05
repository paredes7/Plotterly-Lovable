// resources/js/Components/welcome/Hero/HeroHeading.jsx
import { motion } from "framer-motion";

export default function HeroHeading() {
    return (
        <section className="bg-[#2196F3] py-[26px] px-6 flex flex-col items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl"
            >
                <h1 className="text-white text-3xl md:text-[50px] font-extrabold leading-tight mb-8">
                    Plotterly Helps Commercial Contractors <br className="hidden md:block" />
                    Generate Better Leads
                </h1>

                <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto -mt-3 leading-relaxed font-medium">
                    Plotterly is a lead generation platform built for commercial contractors who need 
                    targeted B2B prospects, not random lists.
                </p>
            </motion.div>
        </section>
    );
}