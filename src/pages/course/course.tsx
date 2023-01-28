import { Box, Container, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import CodeIcon from '@mui/icons-material/Code';

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
                    <Box 
                        sx={{
                            borderRadius: '20px', 
                            background: '#09090F',
                            width: '100%',
                            padding: '20px',
                            marginBottom: '10px'
                        }}
                    >
                        <CodeIcon 
                            sx={{
                                color: 'white'
                            }}
                            fontSize="large"
                        >
                        </CodeIcon>
                        <Typography 
                            sx={{
                                color: '#D30059', 
                                fontWeight: 'bold'
                            }}
                            variant="button" 
                            display="block" 
                            gutterBottom>
                            Kickstart.dev
                        </Typography>
                        <Typography 
                            sx={{
                                color: 'white', 
                                fontWeight: '400'
                            }}
                            variant="body2" 
                            display="block" 
                            gutterBottom>
                                Projeto está em desenvolvimento, tem como seu foco auxiliar os desenvolvedores que estão iniciando no mercado e trazer pessoas de outras áreas.
                        </Typography>
                    </Box>
                </Container>
            </motion.div>
        </AnimatePresence>
    );
}