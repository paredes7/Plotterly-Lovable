// resources/js/Components/welcome/Problem/ProblemSection.jsx
import { motion } from "framer-motion";

export default function ProblemSection() {
    const problems = [
        "Reps waste hours calling the wrong companies",
        "Lead lists are outdated, generic, or bought from brokers",
        "Sales managers spend more time fixing inputs than scaling output",
        "Bad leads create bad pipelines.",
    ];

    return (
        <section className="bg-[#2196F3] py-20 px-6 flex items-center justify-center min-h-screen">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                // Cambia shadow-3xl por esta sombra personalizada
                className="bg-white rounded-[1.5rem] p-8 md:p-16 max-w-5xl w-full text-center 
               /* NIVELACIÓN: 0 (X) 0 (Y) 40px (Difuminado) rgba (Blanco con opacidad) */
               shadow-[0_0_50px_rgba(255,255,255,1)]"
            >
                {/* Encabezado Principal */}
                <h2 className="text-[#334155] text-3xl md:text-5xl font-bold leading-tight mb-2">
                    Your Sales Team Doesn't Have a
                    <span className="text-[#ef4444] block md:inline">
                        {" "}
                        Closing Problem.
                    </span>
                </h2>
                <h2 className="text-[#334155] text-3xl md:text-5xl font-bold mb-8">
                    They Have a{" "}
                    <span className="text-[#ef4444]">Lead Problem.</span>
                </h2>

                {/* Subtexto descriptivo */}
                <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                    Most commercial contractors don't lose deals because their
                    reps can't sell. They lose them because:
                </p>

                {/* Lista de Problemas */}
                <div className="flex flex-col items-start max-w-2xl mx-auto space-y-6 mb-16">
                    {problems.map((text, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 text-left"
                        >
                            <div className="flex-shrink-0 w-6 h-6 border-2 border-[#ef4444] rounded-full flex items-center justify-center mt-1">
                                <span className="text-[#ef4444] text-xs font-bold">
                                    ✕
                                </span>
                            </div>
                            <p className="text-slate-600 text-lg md:text-xl font-medium">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer de la tarjeta */}
                <p className="text-[#ef4444] text-xl md:text-2xl font-bold italic">
                    Plotterly fixes the problem at the source.
                </p>
            </motion.div>
        </section>
    );
}
