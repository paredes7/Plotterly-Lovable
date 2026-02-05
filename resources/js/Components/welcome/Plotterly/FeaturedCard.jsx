// resources/js/Components/welcome/Features/FeatureCard.jsx
import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, description, tags }) {
    return (
        <motion.div 
            whileHover={{ y: -8 }}
           className="border group border-gray-200 rounded-[1rem] p-7 shadow-sm 
           transition-all duration-500 flex flex-col h-full

           bg-white/30 
        
           backdrop-blur-md
           
           hover:border-[#ff6b57] 
           hover:shadow-[0_0_20px_rgba(255,107,87,0.4)]

          bg-gradient-to-br from-transparent via-transparent to-transparent 
           hover:from-[#fcedeb]/50"
           
        >
           
            <div className="w-16 h-16 bg-[#ff6b57] glow rounded-2xl flex items-center justify-center mb-3 shadow-[0_8px_20px_rgba(255,107,87,0.5)] transition-transform duration-500">
                <img
                    src={icon}
                    alt={title}
                    className="w-8 h-8 brightness-0 invert transition-transform duration-500 group-hover:scale-125"
                />
            </div>

            <h3 className="text-[#1e293b] md:text-[20px] font-bold mb-1 leading-tight text-left">
                {title}
            </h3>
            <p className="text-gray-500 md:text-[16px] leading-relaxed mb-5 text-left flex-grow">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, index) => (
                    <span 
                        key={index}
                        className="bg-[#ffeae8] text-[#ef4444] md:text-[13px]  font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5 border border-red-50"
                    >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}