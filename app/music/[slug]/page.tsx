"use client";

import Loading from "@/app/loading";
import { useQuery } from "@apollo/client";
import { GET_ALL_MUSICS } from "@/graphql/queries";
import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { Music } from "@/types";
import MusicCart from "@/components/MusicCart";
import MusicPlayer from "@/common/MusicPlayer";


const MusicPage = ({ params }: { params: { slug: string }} ) => {
    const { data, loading } = useQuery(GET_ALL_MUSICS);

    if (loading) return <Loading />

    return (
        <Box>
            <Container maxWidth="xl">
                <Box sx={{ mt: '2rem' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
                        <Typography variant="h5" component={'span'} sx={{ textWrap: 'nowrap' }}>آهنگ ها</Typography>
                        <Box sx={{ borderTop: 0, borderStyle: 'dotted', borderColor: '#000', width: 1 }} />
                    </Box>
                    <Grid container spacing={2} pt={3} pb={3}>
                    {data?.musics.map((music: Music) => (
                        <Grid xs={12} sm={6} md={4} lg={3} key={music?.id}>
                            <MusicCart {...music}/>
                        </Grid>
                    ))}
                    </Grid>
                    <MusicPlayer slug={params.slug}/>
                </Box>
            </Container>
        </Box>
    )
}

export default MusicPage