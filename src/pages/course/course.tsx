import { Container } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

interface CourseProps {

}

export function Course ({}: CourseProps) {
    return (
        <AnimatePresence>
            <motion.div
                key={"course"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Container 
                sx={{padding: '30px'}} 
                maxWidth="md">
                </Container>
            </motion.div>
        </AnimatePresence>
    );
}