"use client";

import { useQuery } from "@apollo/client";
import { GET_ARTIST } from "@/graphql/queries";
import Loading from "@/app/loading";
import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Cart from "./Cart";
import { Artist } from "@/types";


const LatestArtist = () => {
    const { data, loading, error } = useQuery(GET_ARTIST);

    if (loading) return <Loading />

    return (
        <Container maxWidth="xl">
            <Box sx={{ mt: '2rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
                    <Typography variant="h5" component={'span'} sx={{ textWrap: 'nowrap' }}>خواننده ها</Typography>
                    <Box sx={{ borderTop: 0, borderStyle: 'dotted', borderColor: '#000', width: 1 }}/>
                </Box>
                <Grid container spacing={2} pt={3}>
                    {data?.artists.map((artist: Artist) => (
                        <Grid xs={12} sm={6} md={4} lg={3} key={artist.id}>
                            <Cart {...artist} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    )
}

export default LatestArtist