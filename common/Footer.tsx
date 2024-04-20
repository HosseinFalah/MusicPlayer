import { Box, Container, Typography } from "@mui/material"

const Footer = () => {
    return (
        <Box component={'footer'} sx={{ backgroundColor: '#353535' }} position={"relative"} left={0} bottom={0} right={0}>
            <Container maxWidth="xl">
                <Typography sx={{ color: '#fff', padding: '1rem', textAlign: 'center'}}>
                    ساخته شده با ❤️ توسط حسین فلاح {new Date().toLocaleDateString()}
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer