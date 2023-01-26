import { Container, Box, Typography, Stepper, Step, StepLabel, StepContent, Stack, Divider } from "@mui/material";
import ApartmentIcon from '@mui/icons-material/Apartment';
import { AnimatePresence, motion } from "framer-motion";

interface AboutProps {

}

interface Exp {
    title: string,
    company: string,
    data: string,
    body: string
}

const steps: Exp[]= [
    {
        title: 'Junior Backend Software Developer', 
        company: 'Senai - Soluções Digitais',
        data: 'Março de 2022 -  Atualmente',
        body: 'Manutenção e desenvolvimento de uma aplicação Java, utilizando o ecossistema Spring, e testes automatizado utilizando Junit, TestContainers, ArchUnit e Mockito.'
    },
    {
        title: 'Software Developer Internship', 
        company: 'Trier Sistemas',
        data: 'Julho de 2021 -  Março de 2022',
        body: ''
    },
]

export function About ({}: AboutProps) {
    return (
        <AnimatePresence>
            <motion.div
                key={"about"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Container 
                    maxWidth="md" 
                >
                    <Box 
                        sx={{
                            borderRadius: '20px', 
                            background: '#09090F',
                            width: '100%',
                            padding: '20px',
                            marginBottom: '10px'
                        }}
                    >
                        <Typography 
                            sx={{
                                color: '#D30059', 
                                fontWeight: 'bold'
                            }}
                            variant="button" 
                            display="block" 
                            gutterBottom>
                            Sobre mim
                        </Typography>
                        <Typography 
                            sx={{
                                color: 'white', 
                                fontWeight: '400'
                            }}
                            variant="body2" 
                            display="block" 
                            gutterBottom>
                                Desenvolvedor de sistema, apaixonado por tecnologia e muito focado em
                                minha evolução profissional. Tenho experiencia em desenvolvimento ágil
                                sempre busco a melhor forma de desenvolver com a utilização de boas
                                práticas e design patterns.
                        </Typography>
                        <h4 style={{color: '#D30059', marginBottom: '3px'}}>
                            Minhas principais stacks:
                        </h4>
                        <ul style={{color: '#D30059', margin: 0}}>
                            <li>Java</li>
                            <li>Spring</li>
                            <li>Angular</li>
                            <li>Javascript</li>
                            <li>SQL</li>
                            <li>API REST</li>
                            <li>JUnit</li>
                        </ul>  
                    </Box>
                    <Typography 
                        sx={{
                            color: 'white',
                        }}
                        variant="h5" 
                        display="block" 
                        gutterBottom>
                        Formação acadêmica
                    </Typography>
                    <Box 
                        sx={{
                            borderRadius: '20px', 
                            background: '#09090F',
                            width: '100%',
                            padding: '20px',
                            marginBottom: '10px'
                        }}
                    >
                        <Typography 
                            sx={{
                                color: '#D30059', 
                                fontWeight: 'bold'
                            }}
                            variant="button" 
                            display="block" 
                            gutterBottom>
                            Graduado em Analise e desenvolvimento de sistemas
                        </Typography>
                        <Typography 
                            sx={{
                                color: 'white', 
                                fontWeight: '400'
                            }}
                            variant="body2" 
                            display="block" 
                            gutterBottom>
                            IFSC - Instituto Federal de Santa Catarina
                        </Typography>
                        <Typography 
                            sx={{
                                color: 'white', 
                                fontWeight: '400'
                            }}
                            variant="body2" 
                            display="block" 
                            gutterBottom>
                            Periodo de duração - 2019 - 2022
                        </Typography>
                    </Box>
                    <Typography 
                        sx={{
                            color: 'white',
                        }}
                        variant="h5" 
                        display="block" 
                        gutterBottom>
                        Experiência Profissional
                    </Typography>
                    {steps.map((step: Exp, index: number) => 
                        <Box 
                            sx={{
                                borderRadius: '20px', 
                                background: '#09090F',
                                width: '100%',
                                padding: '20px',
                                marginBottom: '10px'
                            }}
                        >
                            <Stack>
                                <Typography
                                    sx={{
                                        color: '#D30059', 
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {step.company}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'white', 
                                        fontWeight: '500'
                                    }}
                                    variant="body1" 
                                >
                                    {step.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: 'gray', 
                                        fontWeight: '400'
                                    }}
                                    variant="body2" 
                                >
                                    {step.data}
                                </Typography>
                            </Stack>
                        </Box>
                    )}
                </Container>
            </motion.div>
        </AnimatePresence>
    );
}