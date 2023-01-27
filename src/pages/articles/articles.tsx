import { Container, Grid, Skeleton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

interface ArticlesProps {

}

export function Articles ({}: ArticlesProps) {
    const loading = true;

    return (
        <AnimatePresence>
            <motion.div
                key={"articles"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Container maxWidth="lg">
                    <Grid container columns={3} gap={2} justifyContent={'center'}>
                        <Skeleton variant="rounded" width={300} height={180} />
                        <Skeleton variant="rounded" width={300} height={180} />
                        <Skeleton variant="rounded" width={300} height={180} />
                        <Skeleton variant="rounded" width={300} height={180} />
                    </Grid>
                </Container>
            </motion.div>
        </AnimatePresence>
    );
}