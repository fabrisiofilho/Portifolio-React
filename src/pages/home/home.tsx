import { Stack, Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

interface HomeProps {

}

interface Tab {
    label: string,
    path: string
}

const tabs: Tab[] = [
    {
        label: 'About',
        path: '/about'
    },
    {
        label: 'Projects',
        path: '/projects'
    },
    {
        label: 'Articles',
        path: '/articles'
    },
    {
        label: 'Contact',
        path: '/contact'
    }
]

export function Home ({}: HomeProps) {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div style={{display: "flex", flexDirection: 'column'}}>
            <Stack
                sx={{
                    width: '100vw', 
                    height: '80px', 
                    alignItems: 'center', 
                    justifyContent: 'space-around'
                }}
                direction="row" 
                spacing={2}
            >
                <Stack
                    direction="row" 
                >
                    <Typography 
                        sx={{
                            color: 'white', 
                            fontWeight: 'bold'
                        }}
                        variant="button" 
                        display="block" 
                        gutterBottom>
                        Fabrisio Filho
                    </Typography>
                    <Typography 
                        sx={{
                            color: '#D30059', 
                            fontWeight: 'bold',
                        }}
                        variant="button" 
                        display="block" 
                        gutterBottom>
                        .Dev
                    </Typography>
                </Stack>
                <Stack
                    direction="row" 
                    spacing={2}
                >
                    {
                        tabs.map((item:Tab) => (
                            <Button 
                            variant="text"
                            disabled={location.pathname === item.path} 
                            onClick={() => {
                                setSelectedTab(item);
                                navigate(item.path);
                            }}
                            sx={{fontWeight: 'bold'}}>{item.label}</Button>
                        ))
                    }
                </Stack>
            </Stack>
            <Box sx={{ height: "calc(100vh - 80px)", width: "100vw"}}>
                <Outlet/>
            </Box>
        </div>
    )

}