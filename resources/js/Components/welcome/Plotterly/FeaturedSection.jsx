// resources/js/Components/welcome/Features/FeatureSection.jsx
import FeatureCard from "./FeaturedCard";

export default function FeatureSection() {
    const features = [
        {
            icon: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1770086883/Captura_de_pantalla_2026-02-02_224605-removebg-preview_data7j.png",
            title: "Define Your Ideal Accounts",
            description: "Target companies that actually fit your business.",
            tags: ["Commercial focus", "Custom criteria"]
        },
        {
            icon: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1770302103/Captura_de_pantalla_2026-02-05_102812-removebg-preview_ueja7l.png",
            title: "Build Targeted Lead Lists",
            description: "Clean, targeted lists instead of generic databases.",
            tags: ["No bad fits", "Always fresh"]
        },
        {
            icon: "https://res.cloudinary.com/dcyx3nqj5/image/upload/v1770302103/Captura_de_pantalla_2026-02-05_102956-removebg-preview_hd4cf7.png",
            title: "Get Decision-Maker Data",
            description: "Contacts your reps can actually use.",
            tags: ["Direct reach", "Faster calls"]
        },
        {
            icon: "https://res.cloudinary.com/dcyx3nqj5/image/upload//Captura_de_pantalla_2026-02-05_103010-removebg-preview_hhvvhu.png",
            title: "Fix Your Funnel",
            description: "Better leads = easier pipeline & higher close rates.",
            tags: ["More deals", "Less waste"]
        }
    ];

    return (
        <section className="bg-[#fcfcfd] py-[80px] px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl relative z-10">

                <div className="absolute top-1 right-[-5%] w-[45%] h-auto opacity-30 pointer-events-none  z-0">
                    <img
                        src="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1770308320/22f3ec39d17e9c40135502a138c34927-removebg-preview_ipurgo.png"
                        alt="Target background"
                       className="w-full h-auto object-contain"
                    />
                </div>

                <div className="flex justify-center mb-5">
                    <span className="bg-[#fff1f0] text-[#ef4444] text-xs font-bold uppercase tracking-widest px-4 rounded-full flex items-center gap-2 border border-red-100 shadow-sm">
                        ⚡ Powerful Features
                    </span>
                </div>

                <h2 className="text-[#1e293b] text-4xl md:text-[50px] font-extrabold text-center leading-tight mb-4">
                    How Plotterly Helps You Generate
                </h2>
                <h2 className="text-[#ef4444] text-4xl md:text-[50px] font-extrabold text-center mb-20">
                    Better Commercial Leads
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 -mt-6 md:gap-5">
                    {features.map((item, index) => (
                        <FeatureCard key={index} {...item} />
                    ))}
                </div>
            </div>

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50/50 rounded-full blur-[100px] -mr-64 -mt-32" />
        </section>
    );
}