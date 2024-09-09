import { motion } from "framer-motion";
import { CERTS } from "../constants";


const Certifications = () => {
    return (
        <div>
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-10 text-center text-4xl">Certifications</motion.h1>
            
            {CERTS.map((certification, index) => (
                <div key={index} className="border-b border-neutral-900 pb-3">
                    <div className="text-center tracking-tighter">
                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="my-4 text-purple-100">{certification.certification}</motion.p>
                        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.4 }} className="my-4">{certification.issueDate}</motion.p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Certifications
