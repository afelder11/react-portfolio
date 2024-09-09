import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

const Education = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-10 text-center text-4xl">Education</motion.h1>
            <div className="text-center tracking-tighter">
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="my-4 text-purple-100">{EDUCATION.school}</motion.p>
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.4 }} className="my-4">{EDUCATION.degree}</motion.p>
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.8 }} className="my-4">{EDUCATION.major}</motion.p>
                <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 2 }} className="my-4">{EDUCATION.gradYear}</motion.p>
            </div>
        </div>
    )
}

export default Education
