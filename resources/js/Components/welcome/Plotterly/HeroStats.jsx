// resources/js/Components/welcome/Hero/HeroStats.jsx
import { motion } from "framer-motion";

export default function HeroStats() {
    const stats = [
        "No brokers.",
        "No expensive databases.",
        "No guessing."
    ];

    return (
        <section className="bg-[#2196F3] pb-20 py-[30px] px-6">
            <div className="container mx-auto max-w-5xl">
                {/* Contenedor Responsivo:
                   - Móvil: flex-col (uno debajo del otro)
                   - PC: flex-row (en una sola línea)
                */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                    {stats.map((text, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center group"
                        >
                            {/* Texto Blanco Negrita */}
                            <span className="text-white text-xl md:text-[22px] font-bold  tracking-wide">
                                {text}
                            </span>
                            
                            {/* Línea Naranja Decorativa (Exacta a la imagen) */}
                            <div className="h-[1px] bg-[#d47405] shadow-[0_2px_10px_rgba(255,107,87,0.4)] w-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}