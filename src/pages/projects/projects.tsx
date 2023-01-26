import { Box, Chip, Container, IconButton, Stack, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRepositories } from "../../redux/reducers/github";
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectsProps {

}

export function Projects ({}: ProjectsProps) {
    const repositories  = useAppSelector(
        (state) => state.github.repositories,
    );    

    const status  = useAppSelector(
        (state) => state.github.status,
    );    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRepositories());
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                key={"project"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Container maxWidth="md">
                    <Typography 
                        sx={{
                            color: 'white',
                        }}
                        variant="h5" 
                        display="block" 
                        gutterBottom>
                        Repositórios
                    </Typography>
                    {
                        repositories.map((repository) => (
                            <Box 
                                sx={{
                                    borderRadius: '20px', 
                                    background: '#09090F',
                                    width: '100%',
                                    padding: '20px',
                                    marginBottom: '10px'
                                }}
                            >   
                                <Stack direction="row" spacing={2} alignItems={'center'} justifyContent={'space-between'}>
                                    <Stack direction="row" spacing={2} alignItems={'center'}>
                                        <Typography 
                                            sx={{
                                                color: 'white',
                                                margin: 0
                                            }}
                                            variant="h5" 
                                            display="block" 
                                            gutterBottom>
                                            {repository.name}
                                        </Typography>
                                        <Chip label={repository.language ?? 'Java'} color="primary" size="small" />
                                    </Stack>
                                    <IconButton aria-label="github" size="small" href={repository.html_url} target="_blank">
                                        <GitHubIcon fontSize="small" />
                                    </IconButton>
                                </Stack>
                            </Box>
                        ))
                    }
                </Container>
            </motion.div>
        </AnimatePresence>
    );
}