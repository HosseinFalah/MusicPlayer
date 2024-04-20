import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';

const Navbar = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#353535' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                textDecoration: 'none',
                            }}
                        >
                            اپلیکیشن پخش موزیک
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component={'a'}>
                            اهنگ ها
                        </Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar