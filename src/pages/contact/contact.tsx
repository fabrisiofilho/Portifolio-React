import { Container, IconButton, Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

interface ContactProps {

}

export function Contact ({}: ContactProps) {
    return (
        <AnimatePresence>
            <motion.div
                key={"contact"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Container maxWidth="md">
                    <Stack
                        direction="row" 
                        spacing={2}
                        justifyContent={"center"}
                    >
                        <IconButton aria-label="delete" size="large">
                            <InstagramIcon fontSize="inherit" />
                        </IconButton>

                        <IconButton aria-label="delete" size="large">
                            <EmailIcon fontSize="inherit" />
                        </IconButton>

                        <IconButton aria-label="delete" size="large">
                            <HistoryEduIcon fontSize="inherit" />
                        </IconButton>
                    </Stack>
                </Container>
            </motion.div>
        </AnimatePresence>
    );
}