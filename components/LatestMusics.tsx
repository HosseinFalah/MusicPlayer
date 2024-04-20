"use client";

import { Box, Container, Typography } from "@mui/material";
import Loading from "@/app/loading";
import { useQuery } from "@apollo/client";
import { GET_LIMIT_MUSICS } from "@/graphql/queries";
import Grid from '@mui/material/Unstable_Grid2';
import { Musics } from "@/types";
import MusicBox from "./MusicBox";

const LatestMusics = () => {
    const { data, loading } = useQuery(GET_LIMIT_MUSICS);
    
    if (loading) return <Loading />

    return (
        <Container maxWidth="xl">
            <Box sx={{ mt: '2rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
                    <Typography variant="h5" component={'span'} sx={{ textWrap: 'nowrap' }}>آهنگ ها</Typography>
                    <Box sx={{ borderTop: 0, borderStyle: 'dotted', borderColor: '#000', width: 1 }} />
                </Box>
                <Grid container spacing={2} pt={3} pb={3}>
                    {data?.musics.map((music: Musics) => (
                        <Grid xs={12} sm={6} md={4} lg={2} key={music?.id}>
                            <MusicBox {...music}/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default LatestMusics