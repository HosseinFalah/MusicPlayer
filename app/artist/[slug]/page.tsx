"use client";

import Loading from "@/app/loading";
import MusicBox from "@/components/MusicBox";
import { GET_ARTIST_DATA } from "@/graphql/queries";
import { Musics } from "@/types";
import { useQuery } from "@apollo/client";
import { Box, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

const ArtistPage = ({ params }: { params: { slug: string } }) => {
    const { data, loading } = useQuery(GET_ARTIST_DATA, {
        variables: { slug: params.slug }
    });

    if (loading) return <Loading />

    return (
        <Box>
            <Container maxWidth="xl">
                <Box sx={{ mt: '2rem' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
                        <Typography variant="h5" component={'span'} sx={{ textWrap: 'nowrap' }}>{data?.artist?.name}</Typography>
                        <Box sx={{ borderTop: 0, borderStyle: 'dotted', borderColor: '#000', width: 1 }} />
                    </Box>
                </Box>
                
                <Box>
                    <Box
                        component={'img'}
                        src={data?.artist?.image?.url}
                        width={1}
                        maxWidth={'28rem'}
                        margin={'auto'}
                        display={'block'}
                        alt={data?.artist?.name}
                        loading="lazy"
                    />

                    <Box dangerouslySetInnerHTML={{ __html: data?.artist?.description?.html }}>
                    </Box>
                </Box>
                <Grid container spacing={2} pt={3} pb={3}>
                    {data?.artist?.musics.map((music: Musics) => (
                        <Grid xs={12} sm={6} md={4} lg={2} key={music?.id}>
                            <MusicBox {...music}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default ArtistPage