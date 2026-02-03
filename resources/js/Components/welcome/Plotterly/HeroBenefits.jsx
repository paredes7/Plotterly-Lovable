// resources/js/Components/welcome/Hero/HeroBenefits.jsx
import BenefitCard from "./BenefitCard";

export default function HeroBenefits() {
    const benefits = [
        {
            title: "Define Your Ideal Lead",
            description:
                'Specify exactly what a "qualified commercial lead" looks like for your business',
            iconPath: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1770086883/Captura_de_pantalla_2026-02-02_224605-removebg-preview_data7j.png", // Reemplaza con tus rutas
        },
        {
            title: "Generate Targeted Lists",
            description:
                "Build lead lists based on your ideal accounts, not generic databases",
            iconPath: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1770086883/Captura_de_pantalla_2026-02-02_224622-removebg-preview_pjmhni.png",
        },
        {
            title: "Get Real Contacts",
            description:
                "Access decision-maker contact details your reps can actually use",
            iconPath: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1770086883/Captura_de_pantalla_2026-02-02_224640-removebg-preview_dcfi3y.png",
        },
    ];

    return (
        <section className="bg-[#2196F3] px-6 py-[26px]">
            {/* Ajustamos el max-w a 5xl para que coincida con la tarjeta blanca de arriba */}
            <div className="container mx-auto max-w-5xl">
                
                <h2 className="text-white text-2xl md:text-[22px] font-bold text-center mb-12">
                    With Plotterly, your team can:
                </h2>

                {/* Grid alineado: Usamos gap-6 para un look más compacto y centrado */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-5 items-stretch">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                </div>
            </div>
        </section>
    );
}
