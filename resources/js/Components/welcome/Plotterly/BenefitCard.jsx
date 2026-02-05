// resources/js/Components/welcome/Hero/BenefitCard.jsx
import { motion } from "framer-motion";

export default function BenefitCard({ title, description, iconPath }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                backgroundColor: "#00aff5", 
            }}
            transition={{ duration: 0.3 }}
           
            className="group flex-1 min-w-[280px] max-w-[370px] bg-[#239afc] backdrop-blur-sm 
               border border-white/25 rounded-[1.5rem] p-8 w-full
               flex flex-col items-center text-center shadow-lg mx-auto lg:mx-0 cursor-pointer"
        >
            
            <div className="w-16 h-16 bg-[#ff6b57] rounded-2xl flex items-center justify-center mb-3 shadow-[0_8px_20px_rgba(255,107,87,0.4)] transition-transform duration-500">
                <img
                    src={iconPath}
                    alt={title}
                    className="w-8 h-8 brightness-0 invert transition-transform duration-500 group-hover:scale-125"
                />
            </div>

            <h3 className="text-white md:text-[22px] font-bold mb-2 transition-colors duration-300 group-hover:text-white">
                {title}
            </h3>
            <p className="text-white/70 text-lg md:text-[17px] -mb-2 font-medium transition-colors duration-300 group-hover:text-white">
                {description}
            </p>
        </motion.div>
    );
}
