import { motion } from "framer-motion";

const BoxAnLeft = ({ children }) => {

    return (
        <motion.div
            initial={{ x: "-10vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 80, dealay: 3, opacity: { duration: 2 } }}
        >
            {children}
        </motion.div>
    );
};

const BoxAnRight = ({ children }) => {

    return (
        <motion.div
            initial={{ x: "10vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 80, dealay: 3, opacity: { duration: 2 } }}
        >
            {children}
        </motion.div>
    );
};

const BoxAnOpacity = ({ children }) => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 80, dealay: 3, opacity: { duration: 2 } }}
        >
            {children}
        </motion.div>
    );
};

const BoxUnderToTop = ({ children }) => {
    return (
        <motion.div
            initial={{ y: "-10vw", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 80, dealay: 3, opacity: { duration: 2 } }}
        >
            {children}
        </motion.div>
    )
}

export { BoxAnLeft, BoxAnOpacity, BoxUnderToTop, BoxAnRight };