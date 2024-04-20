import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';
import { Music } from "@/types";
import Link from "next/link";

const MusicCart = ({ id, name, slug, coverPhoto, file, artist }: Music) => {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex', backgroundColor: '#3f3f3f', color: '#fff' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Link href={`/music/${slug}`} className="text-white no-underline">
                        <Typography component="div" variant="h5">
                            {name}
                        </Typography>
                    </Link>
                    <Link href={`/artist/${artist?.slug}`} className="text-white no-underline">
                        <Typography variant="subtitle1" component="div">
                            {artist?.name}
                        </Typography>
                    </Link>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon sx={{ color: '#fff' }} /> : <SkipPreviousIcon sx={{ color: '#fff' }} />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <Link href={`/music/${slug}`}>
                            <PlayArrowIcon sx={{ height: 38, width: 38, color: '#fff' }} />
                        </Link>
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon sx={{ color: '#fff' }} /> : <SkipNextIcon sx={{ color: '#fff' }} />}
                    </IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 1, height: '15rem' }}
                image={coverPhoto.url}
                alt={name}
            />
        </Card>
    )
}

export default MusicCart